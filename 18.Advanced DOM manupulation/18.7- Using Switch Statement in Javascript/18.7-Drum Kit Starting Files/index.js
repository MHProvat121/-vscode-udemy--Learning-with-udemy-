//track (a-d)


// a) working function (will play audio when clicked)
function handleClick() {
    
    //a1)select buttons inner (ex:w,a,s,d,f)
    var buttonInnerHTML = this.innerHTML;

    //a2)create switch options for inner (a.2.1 / 7 times)
    switch (buttonInnerHTML) {

        //a2.1)create audio for "w" button
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play(); 
            break;

        //a2.1)create audio for "a" button
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        
        //a2.1)create audio for "s" button
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;

        //a2.1)create audio for "w" button
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;

        //a2.1)create audio for "j" button
        case "j":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;


        //a2.1)create audio for "k" button
        case "k":
            var kick_bass = new Audio("./sounds/kick-bass.mp3")
            kick_bass.play();
            break;

        //a2.1)create audio for "w" button
        case "l":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;

        //a2.2) set else/default 
        default:
            console.log(buttonInnerHTML)
            
    }

}

// c1) get all ".drum" classed buttons. querySelectorAll(.drum) is a "nodeList"= a list array > c2) get length of nodeList
var numberOfButtons = document.querySelectorAll(".drum").length;

// c2) loop through buttons ,(i range = 0 to {drum.length =7})
for (var i = 0; i < numberOfButtons; i++) {

    // b) select all ".drum" button > c3) but specific each button using index
    var button = document.querySelectorAll(".drum")[i];

    // d) attach event listener
    button.addEventListener("click", handleClick);
}
