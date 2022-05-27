var submit=document.getElementById('submit-image')

submit.addEventListener('click', function(e){
    e.preventDefault()
    var image=document.getElementById('myfile').value
    console.log(image)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            image:image
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function(response){ 
        return response.json()
    }).then(function(data){
        console.log(data)
    }).catch(error => console.error('Error:', error)); 
});