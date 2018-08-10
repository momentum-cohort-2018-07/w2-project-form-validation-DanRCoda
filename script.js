// console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var inputElements = document.getElementsByTagName('input')
    for (var el of inputElements) {
        
        if (el.value.trim() === "") {
            
           el.parentElement.classList.add('input-invalid')
           errorMessage(el.parentElement)
           
           
          
           
        } else {
            el.parentElement.classList.add('input-valid')
        }
    }
})

function errorMessage(el) {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'field is required'

    el.appendChild(errorDiv)

}

function clearError(el) {
    var input = document.getElementsByTagName('div')
    div.classList.remove('errorDiv')
    var errorMsg =div.parentElement.querySelector('error-msg')
    if (errorMsg) {
        errorMsg.remove(el)
    }
}