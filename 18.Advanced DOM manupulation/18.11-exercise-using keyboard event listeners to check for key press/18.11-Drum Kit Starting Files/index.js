var numberOfButtons = document.querySelectorAll(".drum").length;

//b) BUTTON CLICK
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //b1) function called over mouse click
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//c) KEYBOARD PRESS
document.addEventListener("keyup", function (event) {
    makeSound(event.key); //function called over keyboard press
});

// a) SOUND LOGIC
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
