//track (a'-d') (d1'-d4')


var numberOfButtons = document.querySelectorAll(".drum").length;

// b') BUTTON CLICK
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        //
        buttonAnimation(buttonInnerHTML);
    });
}

//c') KEYBOARD PRESS
document.addEventListener("keyup", function (event) {
    makeSound(event.key); 
    buttonAnimation(event.key);
});

// a') SOUND LOGIC
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("./sounds/crash.mp3").play();
            break;

        case "k":
            new Audio("./sounds/kick-bass.mp3").play();
            break;

        case "l":
            new Audio("./sounds/snare.mp3").play();
            break;

        default:
            console.log(key);
    }
}

//d') creating function for button animation
function buttonAnimation(currentKey){

//d1') select which key is pressed via hiher order function parameter > d2')make it look like a " css class name"
var activeButton= document.querySelector("."+ currentKey); //.w,.a,.s 

//d3') add "pressed" class in> a html tag
activeButton.classList.add("pressed");

//d4')add setTimeout function to remove > animation time over click or keypress
setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100); //100= 1 ms

}