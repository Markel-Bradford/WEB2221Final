// Drop down menu
function toggleDropdown() {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}

// Function to receive user name and display welcome message
function welcome() {
    var userName = prompt("Please enter your name");
    var greeting = "Hello, " + userName + ". Welcome to the world of Melee."

    document.write("<h1 id=userName>")
    document.write(greeting);
    document.write("</h1>");

}

// Web Storage API script. Set items in local storage and retreive them to display on the webpage
var head = document.getElementById('surprise-phrase');
var img = document.getElementById('surprise-img')
var desc = document.getElementById("surprise-desc");

// Set and retrieve content in localStorage
function getContent() {
    if (typeof (Storage) !== "undefined") {
     
    // setItem() will set store the passed attribute and value in localStorage
    localStorage.setItem('heading', 'SHOW YOUR MOVES!!');
    localStorage.setItem('image', 'showyamoves.gif')
    localStorage.setItem('description', 'You just got taunted by Captain Falcon!');
                     
    // This is the way of accessing the items 
    // stored in the storage 
    head.innerText = localStorage.heading;
    img.src = localStorage.image;
    img.style.display = "block"
    desc.innerText = localStorage.description;
    } else {
    head.innerText = "Your browser does not support web storage API.";
    }
}

// Remove content from localStorage
function remContent() { 
    // removeItem() will remove the passed attribute and value from localStorage.
    localStorage.removeItem('heading');
    localStorage.removeItem('description');
    localStorage.removeItem('image')
    head.innerText = "";
    img.src = ""
    img.style.display = "none"
    desc.innerText = "";
}

// Drag and Drop API script.
function allowDrop(ev) {
            ev.preventDefault();
          }
        
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
    }
        
function drop(ev){
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
    }


// Script to display the answer key in a new window with an onclick event
function newWindow() {
    open('answerkey.png','dynamicWindow', 'location=1')
    }