// Daniel Jaegers
// DAJ6GD
// 3/18/2020
// Challenge 7: Web Servers S20

function handleResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
