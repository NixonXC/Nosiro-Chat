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
}