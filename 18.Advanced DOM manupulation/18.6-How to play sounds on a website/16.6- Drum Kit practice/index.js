//track (a-d)


// a) working function (will play audio when clicked)
function handleClick() {
    //a1) create new object(="Audio"), put your mp3 file in the object
    var audio = new Audio('./sounds/crash.mp3');
    //a2)use play() method to make the object work
    audio.play();

    //a3)use "this" to identify objects/elements. here object/element is <button>
    this.style.color= "white";
    console.log(this.innerHTML);//a4)see what is in the button element by innerHTML
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
