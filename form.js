const login  = {
    display: document.querySelector('.log-in'),
    button : document.querySelector('#switch-to-log-in'),
    form : document.querySelector('#login-form'),
    usernames: ['user1'],
    passwords: ['password'],
    email: ['email@email.com']
};



const signup = {
    display: document.querySelector('.sign-up'),
    button : document.querySelector('#switch-to-sign-up'),
    form : document.querySelector('#signup-form')
};

const errormsg = document.querySelector('.errormsg');
const successmsg = document.querySelector('.successmsg');
const errormsg1 = document.querySelector('.errormsg1');
const errormsg2 = document.querySelector('.errormsg2');
const errormsg3 = document.querySelector('.errormsg3');
const errormsg4 = document.querySelector('.errormsg4');

//Login into account
login.button.addEventListener('click',function(){
    login.display.parentElement.parentElement.classList.remove('register');
    login.button.parentElement.classList.add('register');
    signup.button.parentElement.classList.remove('register');
    signup.display.parentElement.parentElement.parentElement.classList.remove('register')
})

login.form.addEventListener('click',function(){
    errormsg.classList.remove('show');
})
login.form.addEventListener('submit',function(e){
    e.preventDefault();
    let validAccount = false;
    for(let i = 0; i<login.usernames.length; i++)
    {
        if(login.form.username.value === login.usernames[i])
        {
            validAccount = true;

            if(login.form.password.value !== login.passwords[i])
            {
               validAccount = false;
            }
            break;
        }
        
    }
    if(validAccount === false)
    {
        errormsg.classList.add('show');
        // alert("Either Username doesn't exist or Password doesn't match");
        login.form.password.value = "";
    }
    else
    {
        login.form.username.value = "";
        login.form.password.value = "";
        alert('Login Successful')

    }
})

//Create new account

const msg1 = signup.form.querySelector('.errormsg1');
const msg2 = signup.form.querySelector('.errormsg2');
const msg3 = signup.form.querySelector('.errormsg3');
const msg4 = signup.form.querySelector('.errormsg4');

signup.button.addEventListener('click',function(){
    signup.display.parentElement.parentElement.classList.add('register');
    signup.button.parentElement.classList.add('register');
    login.button.parentElement.classList.remove('register');
    signup.display.parentElement.parentElement.parentElement.classList.add('register');

})

signup.form.addEventListener('click',function(){
    successmsg.classList.remove('show');
    for(let msg of [msg1,msg2,msg3,msg4])
    {
        msg.classList.remove('show');
    }
})

signup.form.addEventListener('submit',function(e){
    e.preventDefault();
    
    let newAccount = true;
    let i;
    for(i = 0; i<login.usernames.length; i++)
    {
        if(signup.form.email.value === login.email[i]){
            newAccount = false;
            // alert('Email already registered');
            // signup.form.email.nextSibling.classList.add('show');
            
            msg1.classList.add('show');
            break;
        }
        if(signup.form.newUsername.value === login.usernames[i])
        {
            newAccount = false;
            // alert('Username already taken')
            
            msg2.classList.add('show');
            break;
        }
        if(signup.form.newPassword.value.length < 6 )
        {
            // alert('Password should have more than 6 characters');
            
            msg3.classList.add('show');
            signup.form.newPassword.value = "";
            signup.form.confirmPassword.value= "";
            newAccount = false;
            break;
        }
        if(signup.form.newPassword.value !== signup.form.confirmPassword.value)
        {
            // alert('Password does not match');
            
            msg4.classList.add('show');
            signup.form.confirmPassword.value = "";
            newAccount = false;
            break;
        }
    }

   
    if(newAccount === true)
    {
        login.usernames[login.usernames.length] = signup.form.newUsername.value;
        login.passwords[login.passwords.length] = signup.form.newPassword.value;
        login.email[login.email.length] = signup.form.email.value;
        signup.form.email.value = "";
        signup.form.newUsername.value = "";
        signup.form.newPassword.value ="";
        signup.form.confirmPassword.value = "";
        successmsg.classList.add('show');
        
    }
    
    
})


//Animation 
