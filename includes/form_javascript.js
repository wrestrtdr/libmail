  var identityOk = false;
  var emailOk = false;
  var passwordOk = false;
  var confirmPasswordOk = false;
  var captchaOk = false;

  function submitBtChange(){
    if(identityOk && emailOk && passwordOk && confirmPasswordOk && captchaOk){
      document.forms["registerForm"].elements["submitActionBt"].removeAttribute("disabled");
      document.forms["registerForm"].elements["submitActionBt"].removeAttribute("class");
      document.forms["registerForm"].elements["submitActionBt"].setAttribute("class","btn-large waves-effect waves-light green pulse");
    }else{
      document.forms["registerForm"].elements["submitActionBt"].setAttribute("disabled", "");
    }
  }
  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@libmail.eu$/;
      return re.test(email);
  }

  function identityCheck(){
    var identity = document.forms["registerForm"].elements["identity"].value;
    if(identity.length >= 5 && identity.length <= 25){
      document.forms["registerForm"].elements["identity"].setAttribute("class", "identity valid");
      identityOk = true;
    }else if(document.forms["registerForm"].elements["identity"].value != ""){
      document.forms["registerForm"].elements["identity"].setAttribute("class", "identity invalid");
      identityOk = false;
    }else {
      document.forms["registerForm"].elements["identity"].setAttribute("class", "identity");
      identityOk = false;
    }
    submitBtChange();
  }

  function emailCheck(){
    var email = document.forms["registerForm"].elements["email"].value;
    if(validateEmail(email) == true){
      if(email.length >= 14 && email.length <= 35){
        document.forms["registerForm"].elements["email"].setAttribute("class", "email valid");
        emailOk = true;
      }else{
        document.forms["registerForm"].elements["email"].setAttribute("class", "email invalid");
        emailOk = false;
      }
    }else if(document.forms["registerForm"].elements["email"].value != ""){
      document.forms["registerForm"].elements["email"].setAttribute("class", "email invalid");
      emailOk = false;
    }else{
      document.forms["registerForm"].elements["email"].setAttribute("class", "email");
      emailOk = false;
    }
    submitBtChange();
  }
  function passwordCheck(){
    var password = document.forms["registerForm"].elements["password"].value;
    if(password.length >= 8 && password.length <= 256){
      document.forms["registerForm"].elements["password"].setAttribute("class", "password valid");
      passwordOk = true;
    }else if(document.forms["registerForm"].elements["password"].value != ""){
      document.forms["registerForm"].elements["password"].setAttribute("class", "password invalid");
      passwordOk = false;
    }else{
      document.forms["registerForm"].elements["password"].setAttribute("class", "password");
      passwordOk = false;
    }
    confirmPasswordCheck();
    submitBtChange();
  }
  function confirmPasswordCheck(){
    var password = document.forms["registerForm"].elements["password"].value;
    var confirmPassword = document.forms["registerForm"].elements["confirmPassword"].value;
    if(password == confirmPassword && document.forms["registerForm"].elements["confirmPassword"].value != ""){
      document.forms["registerForm"].elements["confirmPassword"].setAttribute("class", "confirmPassword valid");
      confirmPasswordOk = true;
    }else if(document.forms["registerForm"].elements["confirmPassword"].value != ""){
      document.forms["registerForm"].elements["confirmPassword"].setAttribute("class", "confirmPassword invalid");
      confirmPasswordOk = false;
    }else{
      document.forms["registerForm"].elements["confirmPassword"].setAttribute("class", "confirmPassword");
      confirmPasswordOk = false;
    }
    submitBtChange();
  }

  function captchaCheck(){
    var captchaText = document.forms["registerForm"].elements["captchaText"].value;
    if(captchaText.length == 6){
      captchaOk = true;
    }else{
      captchaOk = false;
    }
    submitBtChange();
  }
