const form = document.getElementById('form')
const fullname_input= document.getElementById('fullname')
const email_input = document.getElementById('email')
const phoneNo_input = document.getElementById('phoneNo')
const password_input = document.getElementById('password')
const repeat_password_input = document.getElementById('repeat-password')
const error_message= document.getElementById('error-message')

form.addEventListener('submit', (e) =>{
   // e.preventDefault()

   let errors= []

   if(fullname_input){
    //if there is full name the this is the sign up form
    errors = getSignupFormErrors(fullname_input.value, email_input.value, phoneNo_input.value, password_input.value, repeat_password_input.value )
   }
   else{
   //if we do not have a full name input then we are in the login
   errors = getLoginFormErrors(email_input.value, password_input.value)
   }

   if(errors.length > 0){
      //if there are any errors
      e.preventDefault()
      error_message.innerText = errors.join(". ")
   }
})

function getSignupFormErrors(fullname, email, phoneNo, password, repeatPassword){
   let errors = []

   if(fullname === '' || fullname == null){
      errors.push('Full Name is required')
      fullname_input.parentElement.classList.add('incorrect')
   }
   if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
   }
   if(phoneNo === '' || phoneNo == null){
      errors.push('Phone Number is required')
      phoneNo_input.parentElement.classList.add('incorrect')
   }
   if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
   }
   if(password.length < 8){
      errors.push('Password must have at least 8 characters')
      password_input.parentElement.classList.add('incorrect')
   }
   if(password !== repeatPassword){
      errors.push('Password does not match repeated password')
      password_input.parentElement.classList.add('incorrect')
      repeat_password_input.parentElement.classList.add('incorrect')
   }
  
   return errors;
}

function getLoginFormErrors(email,password){
   let errors = []

   if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
   }

   if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
   }
   return errors
}

const allinputs = [fullname_input, email_input, phoneNo_input, password_input, repeat_password_input].filter(input => input != null)

allinputs.forEach(input  => {
   input.addEventListener('input', () => {
      if(input.parentElement.classList.contains('incorrect')){
         input.parentElement.classList.remove('incorrect') 
         error_message.innerText = ''
      }
   })
})