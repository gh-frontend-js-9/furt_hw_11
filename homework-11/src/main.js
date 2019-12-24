function validateEmptyFieldForm() {
    let checkСontentPassword = document.forms["formLogIn"]["password"].value;
    let checkСontentEmail  = document.forms["formLogIn"]["email"].value;
    if (checkСontentPassword  == ""|| checkСontentEmail == "") {
        document.getElementById("massage").innerHTML = ("Fill in the empty field!");
        return false;
    } else {
        return setOnClickHandlerByElemId ('submit', SendDateFormLogIn);
    }
}

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
    button.addEventListener('click', callback)
}

async function SendDateFormLogIn() {
    const url = 'http://localhost:3000/api/users/login';
    let user = {                                               //  объект с данными, которыми нужно отправить
        "password": "pass",
        "email": "email"
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),                           //Преобразовываем  объект в JSON формат.
            headers: {
                "x-auth-token": "your personal token"
            }
        });
        console.log(response)

        let result = await response;
        if (!response.ok) {
            throw new Error(`Не удалось получить ${url}, статус: ${response.status}`);
        }
        await response.headers.get('x-auth-token');
        console.log(result);

    } catch (error) {
        console.error('Error:', error);
    }
}