document.getElementById('update_form').addEventListener('submit', redflag)

var token = localStorage.getItem('token')
const url = 'http://127.0.0.1:5000/api/v1/red-flags'

function redflag(event) {
    event.preventDefault()
    var redflag_id = parseInt(document.getElementById('redflag_id').value);
    let location = document.getElementById('location')
    let invalid = document.getElementById('invalid')

    fetch(url+'/'+redflag_id+'/location', {
        method : 'PATCH',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        body: JSON.stringify({
            location: location.value,
        })
    })
    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 200){
                alert(invalid.textContent = ''+data.message)
                window.location.replace('get_all_red_flags.html')
            }else{
                invalid.textContent = '' + data.error
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
