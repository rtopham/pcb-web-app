'use strict'

import config from './../../config/config'
import nodemailer from 'nodemailer'

const getAccountAccessAttemptedMessage=(email)=>{

    let message = {
        from: config.smtpUser,
        to: email,
        subject: `${config.appProjectName} Account Access Attempted`,
        text: `You (or someone else) entered this email address when trying to change the password of a ${config.appProjectName} account. \
        However, this email address is not in our database of registered users and therefore the attempted password change has failed.\
        If you are a registered ${config.appProjectName} user and your were expecting this email, please try again using the email address you gave when you signed up.\
        If you are not a registered user, please ignore this email.\
        Kind Regards\
        ${config.appProjectName} Support`,
        html: `<p>You (or someone else) entered this email address when trying to change the password of a ${config.appProjectName} account on our site.\
        </p>However, this email address is not in our database of registered users and therefore the attempted password change has failed.</p>\
        <p>If you are a registered ${config.appProjectName} user and you were expecting this email, please try again using the email address you gave when you signed up.</p>\
        <p>If you are not a registered user, please ignore this email.</p>\
        <p>Kind regards</p>\
        <p>${config.appProjectName} Support</p>`
      }
      return message
}

const getPasswordResetMessage=(email, resetToken)=>{

    let message = {
        from: config.smtpUser,
        to: email,
        subject: `Please Reset your ${config.appProjectName} Password`,
        text: `We sent this message because you requested that your ${config.appProjectName} password be reset. 
        To Get back into your ${config.appProjectName} account you will need to create a new password.
        Please follow these instructions:
        1. Click the link below to open a new and secure browser window
        2. Enter the requested information and follow the instructions to reset your password.
        Reset your password now: 
        ${config.appUrlBase}/reset-password/${resetToken}`,
        html: `<p> We sent this message because you requested that your ${config.appProjectName} password be reset.</p> 
        <p>To Get back into your ${config.appProjectName} account you will need to create a new password.</p>
        <p>Please follow these instructions:</p>
        <p>1. Click the link below to open a new and secure browser window</p>
        <p>2. Enter the requested information and follow the instructions to reset your password.</p>
        <p>Reset your password now:</p>
        <p><a href="${config.appUrlBase}/reset-password/${resetToken}">${config.appUrlBase}/reset-password/${resetToken}</a></p>`
      }
      return message
}


const getResetToken=(length)=>{
    let text=""
    const possible = "abcdefghijklmnopqrstuvwxyz0123456789_-."
    for (let i=0; i<length;i++){
      text += possible.charAt(Math.floor(Math.random()*possible.length))
    }
    return text
  }

const sendMessage=(message)=>{
    let transporter=nodemailer.createTransport({
 
            host: config.smtpUrl,
            port: 465,
            secure: true,
            auth: {
              user: config.smtpUser,
              pass: config.smtpPassword  
            }
          })
        
          transporter.verify(function(error, success) {
            if (error) {
              console.log(error);
            } else {
        //      console.log(success)
        //      console.log("Server is ready to take our messages");
         
            transporter.sendMail(message)
        
            }
          })
}


export{
getAccountAccessAttemptedMessage,
getResetToken,
getPasswordResetMessage,
sendMessage

}
