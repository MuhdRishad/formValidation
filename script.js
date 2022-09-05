function validate(){

    var firstname = document.myForm.firstname.value;
    var re = /^[a-zA-Z]*$/;
    var match = re.test(firstname);
    if ( match == false || firstname == "" ) {
        error_fname.innerHTML = "Enter your first name";
        document.myForm.firstname.focus();
        return false;
    } else {
        error_fname.innerHTML = "";
    }


    var lastname = document.myForm.lastname.value;
    var reg = /^[a-zA-Z]*$/;
    var result = reg.test(lastname);
    if ( result == false || lastname == "") {
        error_lname.innerHTML = "Enter your last name";
        document.myForm.lastname.focus();
        return false;
    } else {
        error_lname.innerHTML = "";
    }

    var username = document.myForm.username.value;
    var regex = /^[a-zA-Z]*$/;
    var check = regex.test(username);
    if ( check == false ||  username == ""){
        error_uname.innerHTML = "Enter username";
        document.myForm.username.focus();
        return false;
    } else {
        error_uname.innerHTML = "";
    }

    var email = document.myForm.email.value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var check = re.test(email);
    if ( check == false ){
        error_email.innerHTML = "Enter a valid email";
        document.myForm.email.focus();
        return false;
    } else {
        error_email.innerHTML = "";
    }


    var gender = document.myForm.gender.value;
    if ( gender == "" ) {
        error_gender.innerHTML = "Select gender";
        document.myForm.gender.focus();
        return false;
    } else {
        error_gender.innerHTML = "";
    }


    var pincode = document.myForm.pincode.value;
    if ( pincode == "" || isNaN(pincode)) {
        error_pincode.innerHTML = "Enter valid pincode";
        document.myForm.pincode.focus();
        return false;
    } else {
        error_pincode.innerHTML = "";
    }

    var password = document.myForm.password.value;
    var re = /^[A-Za-z0-9]\w{5,7}$/;
    var check = re.test(password);
    if ( check == false ) {
        error_password.innerHTML = "Password minimum 6 to 8 charecters";
        document.myForm.password.focus();
        return false;
    } else {
        error_password.innerHTML = "";
    }


    var confirmpass = document.myForm.confirmpass.value;
    if (password == confirmpass) {
        error_confirmpass.innerHTML = "";
        return alert("Registration success");
    } else {
        error_confirmpass.innerHTML = "Password deosn't match !";
        document.myForm.confirmpass.focus();
        return false;
    }
}


function fun(){
    document.getElementById('id_form').reset();
}
