document.getElementById('update_form').addEventListener('submit', intervention)

var token = localStorage.getItem('token')
const url = 'http://127.0.0.1:5000/api/v1/intervention'

function intervention(event) {
    event.preventDefault()
    var intervention_id = parseInt(document.getElementById('intervention_id').value);
    let invalid = document.getElementById('invalid')

    fetch(url+'/'+intervention_id, {
        method : 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token}
    })
    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 200){
                alert(invalid.textContent = ''+data.message)
                window.location.replace('get_all_interventions.html')
            }else{
                invalid.textContent = '' + data.error
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
