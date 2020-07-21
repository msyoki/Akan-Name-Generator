//Set function to reset form data once submitted
function formRefresh(){
   document.getElementById("form_data").reset();
}

function akanNames(){
   //Breakdown and define variables from the form input 
   var birthDate=document.getElementById("birthdate").value;
   var dateEntered= birthDate.split("-");
   var day=parseInt(dateEntered[2]);
   var month=parseInt(dateEntered[1]);
   var year=parseInt(dateEntered[0]);

   //calculate century cc and date of the week variable 
   var cc=Math.floor(year/100) + 1
   var dayOfTheWeek =(( (cc/4) -2*cc-1) + ((5*year/4)) + ((26*(month+1)/10))+ day ) % 7;
   /*
   Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
   where;
   CC - is the century digits. For example 1989 has CC = 19
   YY - is the Year digits (1989 has YY = 89)
   MM -  is the Month
   DD - is the Day of the month 
   mod - is the modulus function ( % )
   */

   document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
   var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
   var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
   var gender=document.getElementById("gender").value;
   var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var dOfWeek = Math.round(dayOfTheWeek)

   //Verification of the form,output of result and error on input.

   if(!isNaN(dOfWeek)){
      if(gender=="Male"){
         document.getElementById("display").innerHTML="You were born on a "+daysOfWeek[dOfWeek]+ " and your akan name is " + maleNames[Math.round(dayOfTheWeek)];
      }else if(gender==="Female"){
         document.getElementById("display").innerHTML="You were born on a "+daysOfWeek[dOfWeek]+ " and your Akan Name is " + femaleNames[Math.round(dayOfTheWeek)];
     }else{
         alert("Invalid gender");
         document.getElementById("display").innerHTML="";
      }   
   }else{
      alert("Invalid date of birth");
      document.getElementById("display").innerHTML="";     
   }

  //reset function
  formRefresh();
}

