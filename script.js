// Hamburgermenu: 

function showMenu() {
    document.getElementById("hmDropdown").classList.toggle("laatzien");
}

window.onclick = function(event) {
  if (!event.target.matches('.fa')) {

    var dropdowns = document.getElementsByClassName("hmomlaag-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("laatzien")) {
        openDropdown.classList.remove("laatzien");
      }
    }
  }
};

document.getElementById("myButton2").onclick = function() {showSave()};

function showSave() {
    document.getElementById("myButton2").innerHTML = "opslaan";
}


