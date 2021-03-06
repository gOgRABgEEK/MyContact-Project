function validateLogin() {
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    if (email.value == "") {
        let ele = document.getElementById("email_error");                
        setError(ele, email, "Email cannot be blank");   
        return false;           
    }
    else {
        let ele = document.getElementById("email_error");
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.value.match(pattern)) {
            setError(ele, email, "Provide valid Email address");
            return false;
        }
        ele.innerText = "";
    }

    if (pass.value == "") {
        let ele = document.getElementById("pass_error");
        setError(ele, email, "Password cannot be blank");    
        return false;
    }
    else {
        ele.innerText = "";
    }

    function setError(e, field=null, msg) {
        e.className = "error";
        if (field != null)
            field.focus();
        e.innerText = msg;
    }
    return true;
}