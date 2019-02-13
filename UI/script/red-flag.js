document.getElementById('redflag-form').addEventListener('submit', red_flag_func)

var token = localStorage.getItem('token')
const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/red-flags'

function red_flag_func(event) {
    event.preventDefault()
    let inctype = document.getElementById('inctype')
    let location = document.getElementById('location')
    let image = document.getElementById('image')
    let video = document.getElementById('video')
    let comment = document.getElementById('comment')
    
    let invalid = document.getElementById('invalid')

    fetch(url, {
        method : 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        body: JSON.stringify({
            inctype: inctype.value,
            location: location.value,
            image : image.value,
            video : video.value,
            comment : comment.value
        })
    })
    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 201){
                alert(invalid.textContent = ''+data.message)
                window.location.replace('home.html')
            }else{
                invalid.textContent = '' + data.error
            }
            console.log(data)
        })
    .catch(error => console.log(error)), invalid.textContent = "error"

}
