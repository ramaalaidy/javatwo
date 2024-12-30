const correctEmail = "admin@admin.com";
const correctPassword = "12345Admin";

function adminLogin(email, password) {
    if (email !== correctEmail) {
        console.log("Incorrect email");
    } else if (password !== correctPassword) {
        console.log("Incorrect password");
    } else {
        console.log("Welcome");
    }
}

let enteredEmail = "admin@admin.com"; 
let enteredPassword = "12345Admin"; 

adminLogin(enteredEmail, enteredPassword);