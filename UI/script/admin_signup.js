document.getElementById('signup-form').addEventListener('submit', register_user)

const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/auth/signup/admin'

function register_user(event) {
    event.preventDefault()
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let othernames = document.getElementById('othernames')
    let phone_number = document.getElementById('phone_number')
    let email = document.getElementById('email')
    let username = document.getElementById('username')
    let password = document.getElementById('password')

    let invalid = document.getElementById('invalid')

    fetch(url, {
        method : 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastname.value,
            othernames : othernames.value,
            phone_number : phone_number.value,
            email : email.value,
            username : username.value,
            password : password.value 

        })
    })
    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 201){
                alert(invalid.textContent = ''+data.message)
                window.location.replace('index.html')
            }else{
                invalid.textContent = '' + data.error
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
