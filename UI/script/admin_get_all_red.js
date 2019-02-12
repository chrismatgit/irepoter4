document.getElementById('getall').addEventListener('click', get_all_redflags)

var token = localStorage.getItem('token')
const url = 'https://ireporter-challenge-4-chris.herokuapp.com/api/v1/red-flags'
let tableBody = document.querySelector('table > tbody')

function get_all_redflags(event) {
    event.preventDefault()
    let action = document.getElementById('action')

    let invalid = document.getElementById('invalid')

    fetch(url, {
        method : 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    })

    .then((response) => response.json())
        .then ((data) => {
            if (data.status == 200){
                for (let redflag of data.data){
                    newRow = document.createElement('tr')
                    newRow.setAttribute("class", "cart-article")
                    
                    redflag_incident_id = document.createElement('td')
                    redflag_incident_id.setAttribute("class", "centered");
                    redflag_incident_id.textContent = redflag.incident_id

                    redflag_createdon = document.createElement('td')
                    redflag_createdon.setAttribute("class", "centered");
                    redflag_createdon.innerHTML = '' + redflag.createdon

                    redflag_createdby = document.createElement('td')
                    redflag_createdby.setAttribute("class", "centered");
                    redflag_createdby.innerHTML = '' + redflag.createdby

                    redflag_inctype = document.createElement('td')
                    redflag_inctype.setAttribute("class", "centered");
                    redflag_inctype.innerHTML = '' + redflag.inctype

                    redflag_location = document.createElement('td')
                    redflag_location.setAttribute("class", "centered");
                    redflag_location.innerHTML = '' + redflag.location

                    redflag_status = document.createElement('td')
                    redflag_status.setAttribute("class", "centered");
                    redflag_status.innerHTML = '' + redflag.status

                    redflag_image = document.createElement('td')
                    redflag_image.setAttribute("class", "centered");
                    redflag_image.innerHTML = '' + redflag.image

                    redflag_video = document.createElement('td')
                    redflag_video.setAttribute("class", "centered");
                    redflag_video.innerHTML = '' + redflag.video

                    redflag_comment = document.createElement('td')
                    redflag_comment.setAttribute("class", "centered");
                    redflag_comment.innerHTML = '' + redflag.comment

                    action = document.createElement('td')
                    action.innerHTML = '<a href="update_redflag_status.html"><button class="block update-item">Update status</button></a>'

                    newRow.appendChild(redflag_incident_id)
                    newRow.appendChild(redflag_createdon)
                    newRow.appendChild(redflag_createdby)
                    newRow.appendChild(redflag_inctype)
                    newRow.appendChild(redflag_location)
                    newRow.appendChild(redflag_status)
                    newRow.appendChild(redflag_image)
                    newRow.appendChild(redflag_video)
                    newRow.appendChild(redflag_comment)
                    newRow.appendChild(action)
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
