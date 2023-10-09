// var script = document.createElement('script');
// script.src = '//code.jquery.com/jquery-1.11.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function(){
    
    $("#username").hide();
    let usernameError = false;
    
    $("#firstName").keyup(function () {
        validateUsername();
    });
 

    function validateUsername() {
        let usernameValue = $("#firstName").val();
        if (usernameValue.length == "") {
            $("#username").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#username").show();
            $("#username").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#username").hide();
        }
    }



    $('#userMail').hide();
    let emailError = true;


    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = 
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        
        let s = email.value;
        if (regex.test(s)) {
            $('#userMail').hide();
            emailError = true;
        } else {
            $('#userMail').show();
            emailError = false;
        }
    });


    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "**length of your password must be between 3 and 10"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
        }
    }

    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#conpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Password didn't Match");
            // $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
        }
    }

    $("#gendercheck").hide();
    let selectOptionError  = true;

    $("#gender").change(function(){
        validateOptionCheck();
    })

    function validateOptionCheck (){
        let optionValue = $("#gender").val();
        console.log($("#gender").val());
        if(optionValue == ''){
            $("#gendercheck").show();
            selectOptionError = false;
            return false;
        }
        else{
            $("#gendercheck").hide();
        }
    }

    $("button").click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (
            usernameError == true &&
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
        ) {
            return true;
        } else {
            return false;
        }
    });

})