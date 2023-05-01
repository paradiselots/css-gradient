var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

// Set the default gradient color text
css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

button.addEventListener("click", function(){
    // Generate random values for the two colors
    var randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background colors of the two input elements to the random colors
    color1.value = randomColor1;
    color2.value = randomColor2;

    // Update the gradient
    setGradient();
});

// function setGradient ()
let setGradient = () => {
    let bsb= body.style.background = 
        "linear-gradient(to right,"
        + color1.value
        + ","
        + color2.value
        + ")";

        css.textContent = bsb;
}


color1.addEventListener("input", setGradient);

// color1.addEventListener("input", function(){
//     body.style.background = 
//         "linear-gradient(to right,"
//         + color1.value
//         + ","
//         + color2.value
//         + ")";
// })

color2.addEventListener("input",setGradient);

// color2.addEventListener("input", function(){
//     body.style.background = 
//         "linear-gradient(to right,"
//         + color1.value
//         + ","
//         + color2.value
//         + ")";
// })