

/*1) track (a-b)

//code to add event listner to one button 
//a)select  <button> with querySelector(), on which you will put your working function> b1) addEventListner(type,work)
document.querySelector("button").addEventListener("click",handleClick);

//b)make a working function
function handleClick(){
    alert("clicked");
}

*/

//2)

// a) working function (get alert when clicked)
function handleClick() {
    alert("clicked");
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

