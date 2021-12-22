let colors = ["red", "orangered", "orange", "yellow", 
"yellowgreen", "lightgreen","green", "turquoise", "cyan", 
"lightskyblue", "dodgerblue", "blue", "darkblue", "indigo", 
"darkmagenta", "violet", "lightpink", "lightgray", "gray", 
"black", "white"]

let leftS = document.getElementById("pallet");

for (let i= 0; i < colors.length; i++){
    let palletColors = document.createElement("div");
    palletColors.className = "color";
    palletColors.style.backgroundColor = colors[i];
    leftS.appendChild(palletColors);
}

for (let i = 0; i <= 60*24; i++){
    let pixels = document.createElement("div");
    pixels.className = "pixels";
    pixels.style.backgroundColor = "white";
    canvas.appendChild(pixels);   
}

// let colorBlocks = document.getElementsByClassName("color")
// let picker = color.addEventListener("click", retrieveColor1);
// // function ColorPicker(e){

// I'm going to try this one later, now is hackaton time!