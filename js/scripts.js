// document.getElementById("card").onmouseover = function hover() {
//     this.style.background = "green";
//     setTimeout(hover, 2500);
// }

// document.getElementById("card").onmouseout = function() {
//     this.style.background = "red";
// }

var div = document.getElementById("card");

card.onmouseover = function hover() {
    this.setAttribute("style","background:linear-gradient(-60deg,#488b00 40%, #7AB63B 100%);");
}
card.onmouseout = function () {
    this.setAttribute("style", "background:#131313");
}

