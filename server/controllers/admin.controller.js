
import config from './../../config/config'
import nodemailer from 'nodemailer' 

const sendContactMessage = (req, res) => {
console.log(req.body)

const message = {
    from: config.smtpUser,
    replyTo: req.body.email,
    to: config.smtpUser,
    subject: req.body.subject,
    text: `Mern Skeleton 3.0 contact form message from: ${req.body.name}, ${req.body.email} re: ${req.body.subject}. \n \n ${req.body.message}`,
    html: `Mern Sekelton 3.0 contact form message from: ${req.body.name}, ${req.body.email} re: ${req.body.subject}. <br/><br/> ${req.body.message}`
  }
  let transporter=nodemailer.createTransport({
    //    service: 'exchange',
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
  
  return res.status('200').json({
    message: "Sent email",
    email:req.body.email
  })
}

export default {
  sendContactMessage
}
