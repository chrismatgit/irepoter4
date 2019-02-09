document.getElementById('login-form').addEventListener('submit', login)

const url = 'http://127.0.0.1:5000/api/v1/auth/login'

function login(event) {
    event.preventDefault()
    let username = document.getElementById('username')
    let password = document.getElementById('password')

    let invalid = document.getElementById('invalid')

    fetch(url, {
        method : 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
            username : username.value,
            password : password.value 

        })
    })
    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 200){
                alert(invalid.textContent = ''+data.message)
                window.location.replace('home.html')
                localStorage.setItem('token', data.token)
            }else{
                invalid.textContent = '' + data.error
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}