document.getElementById('update_form').addEventListener('submit', redflag)

var token = localStorage.getItem('token')
const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/red-flag'

function redflag(event) {
    event.preventDefault()
    var redflag_id = parseInt(document.getElementById('redflag_id').value);
    let invalid = document.getElementById('invalid')

    fetch(url+'/'+redflag_id, {
        method : 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token}
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
