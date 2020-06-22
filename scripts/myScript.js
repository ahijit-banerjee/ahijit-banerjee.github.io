// JavaScript Document

function goProjects(){
	location.assign("https://ahijit-banerjee.github.io/template/Projects.html");
}

function goTeam(){
	location.assign("https://ahijit-banerjee.github.io/template/Team.html");
}

function goProcess(){
	location.assign("https://ahijit-banerjee.github.io/template/Process.html");
}

function goServices(){
	location.assign("https://ahijit-banerjee.github.io/template/Services.html");
}

function goEntrada(){
	location.assign("https://entrada.med.ubc.ca");
}

function goHome(){
	location.assign("https://ahijit-banerjee.github.io/template/HomePage.html");
}

function goPodcast(){
	location.assign("https://medamorphosis-podcast.simplecast.com/");
}

function goTwitter(){
	location.assign("https://twitter.com/ubcmedvid?lang=en");
}

function goYouTube(){
	location.assign("https://youtube.com/ubcmedvid");
}

function goInstagram(){
	location.assign("https://www.instagram.com/ubcmedvid/?hl=en");
}

function goContact(){
	location.assign("mailto:edmedia.med@ubc.ca");
}

function goGallery(){
	location.assign("https://ahijit-banerjee.github.io/template/gallery.html");
}

function goFeatured(){
	location.assign("https://ahijit-banerjee.github.io/template/Featured.html");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
  	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  }
	}
  }
}
