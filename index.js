const bill = document.querySelector("#bill-Amount");
const cashgiven = document.querySelector("#cash-given");
const checkbutton = document.querySelector("#check-button");
const msg = document.querySelector("#error-message")

{
    message.style.display = "none";
if (bill.value > 0 ){
    if (cashgiven.value >= bill.value){}

} else {

}
}
function showMessage (message){
    message.style.display = "Block";
    message.innerText = "The Bill amount should be grater than 0";

}
checkbutton.addEventListener("click", function validateBillAndCashAmount ());