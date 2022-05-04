let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute('src', 'images/firefox-2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox.png');
  }
}


let myButton = querySelector('button');
let myHeading = querySelector('h1');

function setUserName () {
  prompt("Your name: ");
  let myName = prompt("Your name: ");
  // localStorage.setItem('name', myName);
  // myHeading.textContent = "Mozilla is cool, " + myName;
}

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

myButton.onclick = function() {
  setUserName();
}