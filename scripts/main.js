var myImage=document.querySelector('img');

myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc === 'images/Scarlett.jpg'){
		myImage.setAttribute('src','images/Chris.jpg');
	}
	else{
		myImage.setAttribute('src','images/Scarlett.jpg');
	}
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h2');

function setUserName() {
	var myName=prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent='Told you so, '+myName+'!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Told you so, ' + storedName +'!';
}

myButton.onclick = function() {
  setUserName();
}