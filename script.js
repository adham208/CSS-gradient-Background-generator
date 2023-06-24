var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".randoBtn")

button.addEventListener("click", function()
{
    var rando1 = Math.floor(Math.random()*16777215).toString(16);
    var rando2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + rando1;
    color2.value = "#" + rando2;
    css.textContent = body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
});
function setGradient(){

    css.textContent = body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
};

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

