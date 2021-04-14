// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

document.onclick = userClicked;
function userClicked() {
  var x = event.clientX;
  var y = event.clientY;
  var snowball = document.getElementById("snowballAppear");
  snowball.style.display = "";
  snowball.style.position = "absolute";
  snowball.style.left = x + "px";
  snowball.style.top = y + "px";
}
