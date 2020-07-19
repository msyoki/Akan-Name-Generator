
function formRefresh(){
   document.getElementById("form_data").reset();
}


var birthDate=document.getElementById("birthdate").value;
var dateEntered= birthDate.split("-");
var day=parseInt(dateEntered[2]);
var month=parseInt(dateEntered[1]);
var year=parseInt(dateEntered[0]);