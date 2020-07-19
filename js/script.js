 
function formRefresh(){
   document.getElementById("form_data").reset();
}



function akanNames(){
   var day=parseInt(document.getElementById("day").value);
   var month=parseInt(document.getElementById("month").value);
   var year=parseInt(document.getElementById("year").value);

   //Centuary calculation
   var centry=(year-1)/100+1; 
   var dayOfTheWeek = ( centry/4 -2*centry-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;

   document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var gender=document.getElementById("gender").value;
    var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dOfWeek = Math.round(dayOfTheWeek)

/*
   var daysWeek=["Monday","Tuesday","Wednesday","Thursday","Friday"];
   var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
   var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];