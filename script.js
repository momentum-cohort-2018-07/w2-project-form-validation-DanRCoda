// console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var inputElements=document.querySelectorAll('input')
    for(input of inputElements){console.log(input)
    if (input.value.trim() === (""))
        showError(event)
    else  
        showValid(event)
    }
    
})

function showError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')

    var field = document.querySelector('.input-field')
    // field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')

}

function showValid() {
    var validDiv = document.createElement('div')
    validDiv.classList.add('input-valid')

    var field = document.querySelector('.input-field')
    field.classList.add('input-valid')
}