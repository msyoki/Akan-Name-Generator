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