// console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

    var name = document.getElementById('name').value.trim()

    if (name === "") {
        alert('error')
    }

})

function showInvalidFieldError () {
    var errorDiv = document.createElement('div')
}