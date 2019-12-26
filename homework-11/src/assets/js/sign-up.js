async function SendDateFormLogIn(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/api/users';
    let email = document.getElementById("email").value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;

    let user = {
        "name": "name",
        "password": "password",
        "email": " email"
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
            throw new Error(`  ${url}, status: ${response.status}`);
        }
        await response.headers.get('x-auth-token');
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log(response.headers.get('x-auth-token'));


function setOnClickHandlerByElemId(elemId, callback) {
    let button = document.getElementById(elemId);
    button.addEventListener('click', callback)
}

setOnClickHandlerByElemId('submit', SendDateFormLogIn);