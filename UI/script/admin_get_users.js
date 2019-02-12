document.getElementById('getall').addEventListener('click', get_all_users)

var token = localStorage.getItem('token')
const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/users'
let tableBody = document.querySelector('table > tbody')

function get_all_users(event) {
    event.preventDefault()
    let invalid = document.getElementById('invalid')

    fetch(url, {
        method : 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    })

    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 200){
                for (let user of data.Data){
                    newRow = document.createElement('tr')
                    newRow.setAttribute("class", "cart-article")
                    
                    user_user_id = document.createElement('td')
                    user_user_id.setAttribute("class", "centered");
                    user_user_id.textContent = user.user_id

                    user_firstname = document.createElement('td')
                    user_firstname.setAttribute("class", "centered");
                    user_firstname.innerHTML = '' + user.firstname

                    user_lastname = document.createElement('td')
                    user_lastname.setAttribute("class", "centered");
                    user_lastname.innerHTML = '' + user.lastname

                    user_othernames = document.createElement('td')
                    user_othernames.setAttribute("class", "centered");
                    user_othernames.innerHTML = '' + user.othernames

                    user_email = document.createElement('td')
                    user_email.setAttribute("class", "centered");
                    user_email.innerHTML = '' + user.email

                    user_phone_number = document.createElement('td')
                    user_phone_number.setAttribute("class", "centered");
                    user_phone_number.innerHTML = '' + user.phone_number

                    user_username = document.createElement('td')
                    user_username.setAttribute("class", "centered");
                    user_username.innerHTML = '' + user.username

                    user_password = document.createElement('td')
                    user_password.setAttribute("class", "centered");
                    user_password.innerHTML = '' + user.password

                    user_registered = document.createElement('td')
                    user_registered.setAttribute("class", "centered");
                    user_registered.innerHTML = '' + user.registered

                    user_isadmin = document.createElement('td')
                    user_isadmin.setAttribute("class", "centered");
                    user_isadmin.innerHTML = '' + user.isadmin

                    newRow.appendChild(user_user_id)
                    newRow.appendChild(user_firstname)
                    newRow.appendChild(user_lastname)
                    newRow.appendChild(user_othernames)
                    newRow.appendChild(user_email)
                    newRow.appendChild(user_phone_number)
                    newRow.appendChild(user_username)
                    newRow.appendChild(user_password)
                    newRow.appendChild(user_registered)
                    newRow.appendChild(user_isadmin)
                    tableBody.appendChild(newRow)

                }
                
                alert(invalid.textContent = ''+data.message)
                // window.location.replace('home.html')
            }else{
                invalid.textContent = '' + data.error
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
