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

// adresformulier

function showSave() {
    document.getElementById("myButton2").innerHTML = "opslaan";
}

function show_adressen(adres) {
	 var element = document.getElementById("adres_lijst");
	 var my_button = document.createElement("button");
	 for (i = 0; i < adres.length; i++) {
		my_button.id = adres[i].naam;
		my_button.innerHTML = adres[i].naam;
		my_button.onclick = function() {bewerk_adres(adres, i)};
		element.appendChild(my_button) ;
	 }
	
}

function zoek_adres(adres, zoeknaam) {
	for (i = 0; i < adres.length; i++) {
		if (zoeknaam == adres[i].naam;  {
			bewerk_adres(adres, i);
		}
	}
}

function bewerk_adres(adres, adresnummer) {
		document.getElementById("Fullname").value = adres[adresnummer].naam;
		document.getElementById("Streetname").value = adres[adresnummer].straatnaam;
		document.getElementById("Postcode").value = adres[adresnummer].Postcode;
		document.getElementById("Plaatsnaam").value = adres[adresnummer].plaats;
		document.getElementById("Email").value = adres[adresnummer].Email;
}

function my_onload_function() {
	document.getElementById("myButton2").onclick = function() {showSave(2)};

		var adres =[];
		adres.push("test");
		adres.push({ naam:"Jasper", straatnaam:"", Postcode:"",plaats:"",Email:""}) ;
		adres.push({ naam:"Martin", straatnaam:"", Postcode:"",plaats:"",Email:""}) ;
		adres.push({ naam:"Marleen",straatnaam:"", Postcode:"",plaats:"",Email:""}) ;

		
		bewerk_adres(adres, 2);
		show_adressen(adres) ;
		
}


