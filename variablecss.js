<!--
function variablecss() {
var get2date = new Date();
var get2date2 = get2date.getDate();
var get2month = get2date.getMonth() + 1;
var get2time = get2date.getHours();
var EDbanner1 = document.getElementsByClassName("EDbanner");
if (get2date2=="1" && get2month=="4" && get2time<12) {
document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='aprilfools.css'>";
} else if (get2date2=="17" && get2month=="3") {
document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='stp.css'>";
} else if (get2date2=="31" && get2month=="10") {
   document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='halloween.css'>";
} else if (get2date2=="5" && get2month=="11") {
   document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='EDCSS.css'><link rel='stylesheet' href='fireworks.css'>";
} else if (get2date2<"32" && get2month=="12") {
   document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='EDCSS.css'><link rel='stylesheet' href='snowfall.css'>";
} else if (get2date2=="1" && get2month=="1") {
   document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='EDCSS.css'><link rel='stylesheet' href='snowfall.css'><link rel='stylesheet' href='fireworks.css'>";
} else {
document.getElementById("stylesheetplace").innerHTML= "<link rel='stylesheet' href='EDCSS.css'>";
}
}
variablecss();
-->
