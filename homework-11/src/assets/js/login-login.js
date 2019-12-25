//function validateEmptyFieldForm() {
//let checkСontentPassword = document.forms["formLogIn"]["password"].value;
//let checkСontentEmail  = document.forms["formLogIn"]["email"].value;
//if (checkСontentPassword  == ""|| checkСontentEmail == "") {
// document.getElementById("massage").innerHTML = ("Fill in the empty field!");
//return false;
//} else {
//return setOnClickHandlerByElemId ('submit', SendDateFormLogIn);
//}
//}

// function validateShortValuesForm() {
//     let checkСontentPassword = document.forms["formLogIn"]["password"].value;
//     let checkСontentEmail  = document.forms["formLogIn"]["email"].value;
//     let massage = "";
//     if (checkСontentPassword.validity.tooShort || checkСontentEmail.validity.tooShort) {
//         massage = "Value is too small";
//         document.getElementById("massage").innerHTML = massage;
//         return false;
//     }
// }

function setOnClickHandlerByElemId(elemId, callback) {
    let button = document.getElementById(elemId);
    button.addEventListener('click', SendDateFormLogIn)
}
setOnClickHandlerByElemId('submit', SendDateFormLogIn)

async function SendDateFormLogIn() {
    const url = 'http://localhost:3000/api/users/login';

    let email = document.getElementById("email").value;
    let password = document.getElementById('password').value;

    console.log(document.getElementById("email").value)
    console.log(document.getElementById("password").value)

    let user = {
        // "password": "123455678",
        // "email": "karinaa121213@gmail.com"
        "password": password,
        "email": email
    }
    console.log(user);
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        console.log(response)

        let result = await response.json();
        if (!response.ok) {
            throw new Error(` ${url}, status: ${response.status}`);
        }
        let localStorage = await response.headers.get('x-auth-token');
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log(SendDateFormLogIn())