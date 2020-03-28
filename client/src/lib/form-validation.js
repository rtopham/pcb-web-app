
const validateInputLength=(input, min)=>{
    const length = input.length
      if(length>=min) return 'success';
      else if (length>0) return 'error';
      return null;
   }

const validateInputMinMax=(input, min, max)=>{
    const length = input.length
      if(length>min&&length<=max) return 'success';
      else if (length>0) return 'error';
      return null;
   }
  
const validateBirthDate=(date)=>{
    const regex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/ 
    if(regex.test(date)) return 'success'; else if (date.length>0) return 'error'
   }
  
const validateTime=(time)=>{
    const regex = /^([0-9][0-9]):([0-5][0-9]):([0-5][0-9])$/
    if(regex.test(time)) return 'success'; else if (time.length>0) return 'error'
   }
   
const validateEmail=(email)=>{
    const regex =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g 
    if(regex.test(email)) return 'success'; else if(email.length===0) return null;  else if (email.length>0) return 'error'
   } 

const validateWebsite=(website)=>{
    const regex = /^(http:\/\/www.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
    if(regex.test(website)) return 'success'; else if (website.length===0) return null; else if (website.length>0) return 'error'
}

const validatePhone=(phone)=>{
    const regex =  /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm 
    if(regex.test(phone)) return 'success'; else if(phone.length===0) return null; else if (phone.length>0) return 'error'
   } 

const validateZipCode=(zipCode)=>{
    const regex =  /(^\d{5}(\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}$)(^\d{5}(\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}$)/g 
    if(regex.test(zipCode)) return 'success';else if(zipCode.length===0) return null; else if (zipCode.length>0) return 'error'
   } 

 //Note: the password regex requires at least 8 characters, at least 1 uppercase letter, at least one lower case number and at least one number. Special characters are allowed
const validatePassword=(password)=>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm 
    if(regex.test(password)) return 'success'; else if (password.length>0) return 'error'
   } 
  
const validateConfirmPassword=(password, confirmPassword)=>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    if(regex.test(confirmPassword)&&confirmPassword===password) return 'success'; else if (confirmPassword.length>0) return 'error'
   }  

const validateHeight=(height)=>{
    if(height>=48&&height<=220) return 'success'; else if(height.length===0) return null; else return 'error'
  }

const validateWeight=(weight)=>{
   if(weight>=25&&weight<=300) return 'success'; else if(weight.length===0) return null; else return 'error'
 }

export {
    validateInputLength,
    validateInputMinMax,
    validateBirthDate,
    validateTime,
    validateEmail,
    validatePhone,
    validateWebsite,
    validateZipCode,
    validatePassword,
    validateConfirmPassword,
    validateHeight,
    validateWeight
}