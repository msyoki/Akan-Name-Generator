<<<<<<< HEAD
const date = parseInt(document.getElementById("date").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const gender = parseInt(document.getElementById("gender").value);
const form = parseInt(document.getElementById("form").value);

if (date <1 || date >31){
    document.getElementsByClassName(dayerror).innerHtml ="Enter valid date";
    return false;
}else {
    d.setDate(date);
}
=======
var daysOfTheWeek=["Monday","Tuesday","Wednesday","Thursday","Friday"];
var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function days() {
   var d = document.getElementById("date").value
   var m = document.getElementById("month").value
   var y = document.getElementById("year").value
}

Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

+1
>>>>>>> test
