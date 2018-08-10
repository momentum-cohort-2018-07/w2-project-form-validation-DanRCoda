// console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var inputElements = document.getElementsByTagName('input')
    for (var el of inputElements) {
        
        if (el.value.trim() === "") {
            
           el.parentElement.classList.add('input-invalid') &&
           showError()
           
        } else {
            el.parentElement.classList.add('input-valid')
        }
    }
})

function showError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innterText = 'field is required'

    var field = document.getElementById('input')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('error')

}

// function showValid() {
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')

//     var field = document.getElementById('name-field')
//     field.classList.add('input-valid')
// }

// function showError() {
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('input-invalid')

//     var field = document.getElementById('car-field')
//     // field.parentElement.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }

// function showValid() {
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')

//     var field = document.getElementById('car-field')
//     field.classList.add('input-valid')
// }