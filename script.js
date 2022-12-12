function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
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
function SendMessage() {
  if (document.getElementById("text").value == "") {
    console.log("Nope")
    window.alert("Please enter a message!")
  } else {
    let text = document.getElementById("text").value 
    console.log(text)
    let message = document.createElement("div")
    message.setAttribute("id", "user-input")
    let heading = document.createElement("h3")
    heading.innerHTML = "You"
    let textarea = document.createElement("p")
    textarea.innerHTML = text
    message.appendChild(heading)
    message.appendChild(textarea)
    let area =  document.getElementById("messages")
    area.appendChild(message)
    document.getElementById("text").value = ""
    window.scrollTo(10,10)
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}
let text = document.getElementById("text") 
text.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    let text = document.getElementById("text").value 
    console.log(text)
    let message = document.createElement("div")
    message.setAttribute("id", "user-input")
    let heading = document.createElement("h3")
    heading.innerHTML = "You"
    let textarea = document.createElement("p")
    textarea.innerHTML = text
    message.appendChild(heading)
    message.appendChild(textarea)
    let area =  document.getElementById("messages")
    area.appendChild(message)
    document.getElementById("text").value = ""}
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
})
function Sendimage() {
    let url = window.prompt("Please Enter the image/gif URL.")
    let message = document.createElement("div")
    message.setAttribute("id", "user-image")
    let heading = document.createElement("h3")
    heading.innerHTML = "You"
    message.appendChild(heading)
    let img = document.createElement("img")
    img.src = url
    message.appendChild(img)
    let area =  document.getElementById("messages")
    area.appendChild(message)
}
function emoji() {
    let message = document.createElement("div")
    message.setAttribute("id", "user-emoji")
    let img = document.createElement("img")
    img.src = "emojis/smile.png"
    message.appendChild(img)
    let area =  document.getElementById("messages")
    area.appendChild(message)
}