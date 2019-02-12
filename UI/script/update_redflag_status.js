document.getElementById('update_form').addEventListener('submit', redflag)

var token = localStorage.getItem('token')
const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/red-flags'

function redflag(event) {
    event.preventDefault()
    var redflag_id = parseInt(document.getElementById('redflag_id').value);
    let status = document.getElementById('status')
    let invalid = document.getElementById('invalid')

    fetch(url+'/'+redflag_id+'/status', {
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
                window.location.replace('admin_get_all_red_flags.html')
            }else{
                alert(invalid.textContent = '' + data.error)
                window.location.replace('index.html')
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
