let registerform = document.getElementById("registerform");
let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let SuccessAlert = document.getElementById("SuccessAlert");

let allUsers =[];



if (localStorage.getItem("allUsers")  !==null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

registerform.addEventListener("submit", function (e) {

    e.preventDefault();
    
   if (checkIfAllInputsArevalid ()) {
    console.log("user is added");
    addUser();
    
   }
   
    });

    function addUser() {
        let newUser = {
            name: signName.value,
            email: signEmail.value,
            password: signPassword.value,
        };

    if (isExist(newUser) == true) {
        console.log("email is already exist");
        existAlert.classList.replace("d-none , d-block");
        SuccessAlert.classList.replace("d-block", "d-none");

        

        
    }else{
       
        
        console.log(newUser);
        allUsers.push(newUser);
        localStorage.setItem("allUsers" ,JSON.stringify(allUsers) );
        SuccessAlert.classList.replace("d-none", "d-block");
        existAlert.classList.replace("d-block , d-none");

        setTimeout(function () {
            window.location.href ="../sign in/login.html";
        }, 2000);

        
        console.log(allUsers);
        console.log("user is new");
        

    }

    function isExist(newUser) {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email.toLowerCase()== newUser.email.toLowerCase()) {
                console.log("email is already existed");
                return true
            }
            
        };
    }

        
    }
    
    function validateAllInputs (regex, element, alertMsg) {
    
    let pattern = regex;
    
    if (pattern.test (element.value) == true) {
    
    console.log("valid");
    alertMsg.classList.replace("d-block", "d-done");
    return true;
    
    } else {

        console.log("invalid");

        alertMsg.classList.replace("d-done", "d-block");
        return false;
    
    }
    
    };

    

    function checkIfAllInputsArevalid() {

        if (
        
        validateAllInputs(/^[a-zA-Z]{2,}$/, signName, nameAlert) &&
        
        validateAllInputs(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, signEmail, emailAlert) &&
        
        validateAllInputs(
        
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/,   signPassword, passwordAlert
          )
        
        ){
        
        console.log("all inputs are valid");
        
        }else
        
        console.log("something went wrong!!!");
        };