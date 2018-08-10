// console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    clearError()
    var inputElements = document.getElementsByTagName('input')
    for (var el of inputElements) {
        
        if (el.value.trim() === "") {
            
           el.parentElement.classList.add('input-invalid')
           el.parentElement.classList.remove('input-valid')
           errorMessage(el.parentElement)
           
           
           
           
          
           
        } else {
            el.parentElement.classList.add('input-valid')
            el.parentElement.classList.remove('input-invalid')
        }
    }
})

function errorMessage(el) {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'field is required'

    el.appendChild(errorDiv)

}

function clearError() {
    var errorMsgs = document.querySelectorAll('.error-msg')
    for (var errorMsg of errorMsgs) {
        errorMsg.remove()
    }
}