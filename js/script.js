
function formRefresh(){
   document.getElementById("form_data").reset();
}



var birthDate=document.getElementById("birthdate").value;
var dateEntered= birthDate.split("-");
var day=parseInt(dateEntered[2]);
var month=parseInt(dateEntered[1]);
var year=parseInt(dateEntered[0]);

var cc=(year-1)/100+1; 
var dOfTheWeek = ( cc/4 -2*cc-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;
/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
 where;
 CC - is the century digits. For example 1989 has CC = 19
 YY - is the Year digits (1989 has YY = 89)
 MM -  is the Month
 DD - is the Day of the month 
 mod - is the modulus function ( % )
 */