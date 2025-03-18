
function run() {
document.getElementById("diff").innerHTML = diff();
}
function theracalc() {
  document.getElementById("theracalc").style.display = "block";
}
function getCurrentTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  return hour + ":" + minute;
}
document.getElementById("end").value = getCurrentTime();


function diff() {
    var start = document.getElementById("start").value.split(":");
    var end = document.getElementById("end").value.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
        if (hours < 0)
       hours = hours + 24;
  if (hours < 8) {
        reset();
    stage2[0].style.display="block";
      if (hours < 1)
    document.getElementById("charcoal").style.display = "block";
    if (hours >= 4) {
      document.getElementById("bloods1").style.display = "block";
      if (hours >= 6) {
  document.getElementById("over6").style.display="block";
            dispcalc(0);
      }
    }
    else {
      var blood2 = document.getElementById("bloods2");
      var time2 = document.getElementById("start").value.split(":");
      var time2h = +time2[0] + 4;
      if (time2h >= 24) {
        time2h = time2h - 24;
        time2h = "0" + time2h;
      }
      blood2.innerHTML = "Take bloods at: " + time2h + ":" + time2[1] + "<br>  - U&amp;Es, bicarbonate, LFTs, FBC, INR & paracetamol concentration.";
      blood2.style.display = "block";
    }
  }
  else {
    reset();
    stage2[1].style.display="block";
    dispcalc(0);
  }
    
   return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;
}

var YNAC=document.getElementsByClassName("YNAC");
var NNAC=document.getElementsByClassName("NNAC");
var stage2=document.getElementsByClassName("stage2");
function pcalc1(b) {
reset();
stage2[b].style.display="block";
}

  function yesNAC(){
    YNAC[0].style.display="block";
    NNAC[0].style.display="none";
    document.getElementById("bloods4").style.display = "none";
  }
  function noNAC(){
    YNAC[0].style.display="none";
    NNAC[0].style.display="block";
    document.getElementById("bloods4").style.display = "none";
  }
  function clearNAC(){
    YNAC[0].style.display="none";
    NNAC[0].style.display="none";
    document.getElementById("bloods4").style.display = "none";
    document.getElementsByClassName("awaitbloods2")[0].style.display="none";
  }
  
  function paracalc(i){
    var b=document.getElementsByClassName("inputg")[i].value;
    var a=document.getElementsByClassName("inputkg")[i].value;
    if(b==""||a==""){
      clearNAC();
      document.getElementsByClassName("mgkg")[i].innerHTML="";
    }
    else{
      var c=b/a;document.getElementsByClassName("mgkg")[i].innerHTML=c.toFixed();
      if (i == "0") {
      if(c>="150"){
        clearNAC();
        yesNAC()
      }else{
        awaitbloods2();
      }
    }
    if (i == "1") {
      if(c>=75 && b >4000){
        yesbloods();
      } else {
        if (c<75 && b <=4000) {
        nobloods();
        }
        else {
          if (c<75 && b > 4000) {
            maybebloods();
          }
        }
      }
    }
    }
  }
  
  function tabcalc(c) {
    var tabs
    var b=document.getElementsByClassName("inputg")[c].value;
    tabs = b / "500";
    document.getElementsByClassName("paratabs")[c].value = tabs;
  }
  
  function mgcalc(d) {
    var tabs = document.getElementsByClassName("paratabs")[d].value;
    tabs = tabs * "500";
    document.getElementsByClassName("inputg")[d].value = tabs;
  }
  
function bloods4() {
      YNAC[0].style.display="none";
    NNAC[0].style.display="none";
  document.getElementById("bloods4").style.display = "block";
}
function yesbloods() {
  document.getElementById("yesbloods").style.display = "block";
  document.getElementById("nobloods").style.display = "none";
  document.getElementById("maybebloods").style.display = "none";
}
function nobloods() {
  document.getElementById("nobloods").style.display = "block";
  document.getElementById("yesbloods").style.display = "none";
  document.getElementById("maybebloods").style.display = "none";
}
function maybebloods() {
  document.getElementById("nobloods").style.display = "none";
  document.getElementById("yesbloods").style.display = "none";
  document.getElementById("maybebloods").style.display = "block";
}
  function calcreset(){
    document.getElementsByClassName("inputg")[0].value="";
  document.getElementsByClassName("inputkg")[0].value="";
document.getElementsByClassName("paratabs")[0].value="";
document.getElementsByClassName("inputg")[1].value="";
document.getElementsByClassName("inputkg")[1].value="";
document.getElementsByClassName("paratabs")[1].value="";
    document.getElementsByClassName("mgkg")[0].innerHTML="";
    document.getElementsByClassName("mgkg")[1].innerHTML="";
}
function reset(){
  clearNAC();
  for(var a=0; a<stage2.length; a++){
    stage2[a].style.display="none";
  }
  document.getElementsByClassName("odcalc")[0].style.display="none";
  document.getElementsByClassName("odcalc")[1].style.display="none";
    document.getElementsByClassName("odcalc")[2].style.display="none";
  calcreset();
  document.getElementsByClassName("awaitbloods")[0].style.display="none";
  document.getElementsByClassName("awaitbloods2")[0].style.display="none";
  document.getElementById("charcoal").style.display="none";
  document.getElementById("bloods2").style.display="none";
  document.getElementById("bloods1").style.display="none";
  document.getElementById("over6").style.display="none";
    document.getElementById("nobloods").style.display = "none";
  document.getElementById("yesbloods").style.display = "none";
  document.getElementById("maybebloods").style.display = "none";
  document.getElementById("theracalc").style.display = "none";
}
function dispcalc(b){
    clearNAC();
  document.getElementsByClassName("odcalc")[b].style.display="block";
}

function dispover8(){
  document.getElementsByClassName("over8hours")[0].style.display="block";
}
function awaitbloods(){
  clearNAC();
  document.getElementsByClassName("awaitbloods")[0].style.display="block";
}
function awaitbloods2(){
  clearNAC();
  document.getElementsByClassName("awaitbloods2")[0].style.display="block";
}
function clearother() {
  document.getElementsByClassName("awaitbloods2")[0].style.display="none";
}

