const  cardNumber = document.getElementById("cardNumber");

const validator = document.getElementById('validator');

validator.addEventListener("click", processValidation);

function processValidation()
{
 alert (cardNumber.value)

}
