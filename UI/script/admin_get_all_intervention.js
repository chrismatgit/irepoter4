document.getElementById('getall').addEventListener('click', get_all_interventions)

var token = localStorage.getItem('token')
const url = 'http://127.0.0.1:5000/api/v1/interventions'
let tableBody = document.querySelector('table > tbody')

function get_all_interventions(event) {
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
                for (let intervention of data.data){
                    newRow = document.createElement('tr')
                    newRow.setAttribute("class", "cart-article")
                    
                    intervention_intervention_id = document.createElement('td')
                    intervention_intervention_id.setAttribute("class", "centered");
                    intervention_intervention_id.textContent = intervention.intervention_id

                    intervention_createdon = document.createElement('td')
                    intervention_createdon.setAttribute("class", "centered");
                    intervention_createdon.innerHTML = '' + intervention.createdon

                    intervention_createdby = document.createElement('td')
                    intervention_createdby.setAttribute("class", "centered");
                    intervention_createdby.innerHTML = '' + intervention.createdby

                    intervention_inctype = document.createElement('td')
                    intervention_inctype.setAttribute("class", "centered");
                    intervention_inctype.innerHTML = '' + intervention.inctype

                    intervention_location = document.createElement('td')
                    intervention_location.setAttribute("class", "centered");
                    intervention_location.innerHTML = '' + intervention.location

                    intervention_status = document.createElement('td')
                    intervention_status.setAttribute("class", "centered");
                    intervention_status.innerHTML = '' + intervention.status

                    intervention_image = document.createElement('td')
                    intervention_image.setAttribute("class", "centered");
                    intervention_image.innerHTML = '' + intervention.image

                    intervention_video = document.createElement('td')
                    intervention_video.setAttribute("class", "centered");
                    intervention_video.innerHTML = '' + intervention.video

                    intervention_comment = document.createElement('td')
                    intervention_comment.setAttribute("class", "centered");
                    intervention_comment.innerHTML = '' + intervention.comment

                    action = document.createElement('td')
                    action.innerHTML = '<a href="update_intervention_status.html"><button class="block update-item">Update status</button></a>'

                    newRow.appendChild(intervention_intervention_id)
                    newRow.appendChild(intervention_createdon)
                    newRow.appendChild(intervention_createdby)
                    newRow.appendChild(intervention_inctype)
                    newRow.appendChild(intervention_location)
                    newRow.appendChild(intervention_status)
                    newRow.appendChild(intervention_image)
                    newRow.appendChild(intervention_video)
                    newRow.appendChild(intervention_comment)
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
