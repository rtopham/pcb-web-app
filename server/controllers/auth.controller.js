import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'
import {getAccountAccessAttemptedMessage, getPasswordResetMessage, getResetToken, sendMessage} from './../helpers/nodemailerMessageHandler'

const signin = (req, res) => {
 
  User.findOne({
    "email": req.body.email
  }, (err, user) => {

    if (err || !user)
      return res.status('401').json({
        error: "User not found"
      })

    if (!user.authenticate(req.body.password)) {
      return res.status('401').send({
        error: "Email and password don't match."
      })
    }

    const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret)

    res.cookie("t", token, {
      expire: new Date() + 9999
    })

    return res.json({
      token,
      user: {_id: user._id, name: user.name, email: user.email}
    })

  })
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
  console.log(req.profile)
  console.log(req.auth)
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

const hasAuthorizationToViewImage = (req, res, next) => {
//  console.log(req.profile)
//  console.log(req.auth)
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}



///Password Request

const passwordResetRequest = (req, res) => {
  const email=req.body.email
  let message
  let resetToken

  User.findOne({
    "email": email
  }, (err, user) => {

    if (err || !user) message=getAccountAccessAttemptedMessage(email);else{
      resetToken=getResetToken(40)
      message=getPasswordResetMessage(email, resetToken)
    }

  sendMessage(message)

if(resetToken){

user.password_reset.token=resetToken
user.password_reset.time_stamp = new Date().getTime()

User.updateOne({_id:user._id},{ $set: {password_reset: user.password_reset}}, (err)=>{
if(err){
  return res.status(400).json({error: errorHandler.getErrorMessage(err)
  })
}
})

} //end if resetToken 


  return res.status('200').json({
    message: "Sent email",
    email:email,
    user:user    
  })


})
  

}


const validateToken = (req, res) => { 
  const token=req.body.token

  User.findOne({
    "password_reset.token": token
  }, (err, user) => {

    if (err || !user)
    return res.status('401').json({
      error: "Invalid password-reset token. Please submit a new request."
    })

    else
    {
      return res.status('200').json({
        message: "Found Valid Token",
        userId: user._id,
        email:user.email,
        tokenTimeStamp: user.password_reset.time_stamp
        
      })
    }

})

}

const changePassword = (req, res) => { 

  const token=req.body.token
  const password=req.body.password

  User.findOne({
    "password_reset.token": token
  }, (err, user) => {

    if (err || !user)
    return res.status('401').json({
      error: "Invalid password-reset token. Please submit a new request."
    })

    else
    {
      user.password_reset.token=null
      user.password_reset.time_stamp=null
      user.password=password

      user.save()

      return res.status('200').json({
        message: "Successfully changed Password"        
      })
    }

})

}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
  hasAuthorizationToViewImage,
  passwordResetRequest,
  validateToken,
  changePassword
}
