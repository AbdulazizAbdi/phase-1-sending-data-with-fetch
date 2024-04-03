function submitData(userName, userMail){
    return fetch('http://localhost:3000/users', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify({
            name : userName,
            email : userMail
        })
    })
    .then(response => response.json())
    .then(userObject => {
        const idHeader = document.createElement('h2')
        idHeader.textContent = userObject.id;
        console.log(idHeader)
        document.querySelector('body').appendChild(idHeader)
    })
    .catch(error => {
        alert("ERROR CAUGHT!")
        const messageForError = document.createElement('h2');
        messageForError.textContent = error.message;
        document.querySelector('body').appendChild(messageForError)
    })
}