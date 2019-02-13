document.getElementById('update_form').addEventListener('submit', intervention)

var token = localStorage.getItem('token')
const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/interventions'

function intervention(event) {
    event.preventDefault()
    var intervention_id = parseInt(document.getElementById('intervention_id').value);
    let status = document.getElementById('status')
    let invalid = document.getElementById('invalid')

    fetch(url+'/'+intervention_id+'/status', {
        method : 'PATCH',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        body: JSON.stringify({
            status: status.value,
        })
    })
    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 200){
                alert(invalid.textContent = ''+data.message)
                window.location.replace('admin_get_all_interventions.html')
            }else{
                alert(invalid.textContent = '' + data.error)
                window.location.replace('index.html')
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
