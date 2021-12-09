let contentContainer = document.getElementById("resourceContainer");
// let rellax;

// database object
let jsonDatabase = [
  {
    "art" : "breathe3.gif",
    "name" : "Breathing Techniques",
    "link" : "https://www.verywellmind.com/abdominal-breathing-2584115"
  },

  {
    "art" : "unplug.png",
    "name" : "How to Unplug",
    "link" : "https://theblissfulmind.com/how-to-unplug/"
  },

  {
    "art" : "distraction.jpeg",
    "name" : "Quit Tech",
    "link" : "https://www.mentalfloss.com/article/87375/7-ways-break-your-technology-addiction"
  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  testingFunction(jsonDatabase[i]);
}

function testingFunction (incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("item");
  newContentElement.style.backgroundColor = "#f63590";

// creating the album cover image and adding it to the div
  let newImgElement = document.createElement("DIV");
  newImgElement.classList.add("artContainer");
  newContentElement.appendChild(newImgElement);

  let newLink = document.createElement("A");
  newLink.setAttribute('href', incomingJSON['link']);
  newImgElement.appendChild(newLink);

  let newImg = document.createElement("IMG");
  newImg.classList.add("art");
  newImg.src = incomingJSON['art'];
  newLink.appendChild(newImg);

// creating the title and adding it to the div
  let newHeadElement = document.createElement("DIV");
  newHeadElement.classList.add("headContainer");
  newContentElement.appendChild(newHeadElement);
  let heading = document.createElement("H1");
  heading.classList.add("title");
  heading.innerText = incomingJSON['name'];
  // heading.style.fontFamily = tbd
  heading.style.color = "#9ebeff";
  newHeadElement.appendChild(heading);


  contentContainer.appendChild(newContentElement);



}
