//yes = document.getElementById("yes");

function enlargeButton(){
    var yes = document.getElementById("yes");
    var currentWidth = yes.clientWidth;
    var currentHeight = yes.clientHeight;

    var newWidth = currentWidth *1.2;
    var newHeight = currentHeight *1.2;
    yes.style.width = newWidth + "px";
    yes.style.height = newHeight + "px";


}