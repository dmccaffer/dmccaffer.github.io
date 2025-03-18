function myFunction12() {
  var input, filter, ul, i, h4ed, EDh32, EDbuttons, EDbanner, ul22;
  input = document.getElementById("mySearch12");
  filter = input.value.toUpperCase();
  h4ed = document.getElementsByTagName("h4");
  h4stay = document.getElementsByClassName("EDstay");
  EDh32 = document.getElementsByClassName("EDh3");
  EDbuttons = document.getElementsByClassName("EDbuttons");
  EDbanner = document.getElementsByClassName("EDbanner");
  ul = document.querySelectorAll("div.EDcard > a");
  for (i = 0; i < ul.length; i++) {
    if (ul[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      ul[i].style.display = "";
    } else {
      ul[i].style.display = "none";
    }
  }
 for (i = 0; i < h4ed.length; i++) {
   if (filter == "") {
h4ed[i].style.display = "block";
     } else {
h4ed[i].style.display = "none";
     }
  }
  for (i = 0; i < h4stay.length; i++) {
    h4stay[i].style.display = "block";
  }
 for (i = 0; i < EDh32.length; i++) {
   if (filter == "") {
EDh32[i].style.display = "block";
     } else {
EDh32[i].style.display = "none";
 }
 }
   if (filter == "") {
EDbuttons[0].style.display = "block";
EDbuttons[1].style.display = "block";
EDbanner[0].style.display = "none";
    } else {
EDbuttons[0].style.display = "none";
EDbuttons[1].style.display = "none";
EDbanner[0].style.display = "none";
 }
}
