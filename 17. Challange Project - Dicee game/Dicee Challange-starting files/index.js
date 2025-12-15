//track(a-f) ,lesson topics from b

//a)create random number generator 0-0.9999>//a1)make the number (0-5) > a2)floor the number > a3)  + 1 to make (1-6)
var number = Math.random()
number= Math.floor((number*6))+1;


//b) create image name and file name
//b1)image name example = dice1.png ; make it with concatanation
var randomImage = ("dice"+number+".png");

//b2)folder name = ./image/dice1.png
var sourceFolder= ("./images/"+randomImage);
console.log(sourceFolder)//for checking total image and folder making process

//c)select the "first <img> tag" with querySelectorAll > c1)put it in variable
var firstImageTag=document.querySelectorAll("img")[0];

//d)change the src attribute's current folder path- with your newly made folder path
firstImageTag.setAttribute("src", sourceFolder);



//e)apply (a-d) for the second image
var number_1 = Math.random()
number_1 = Math.floor((number_1 * 6)) + 1;
var randomImage_2 = ("dice" + number_1 + ".png");
var sourceFolder_2 = ("./images/" + randomImage_2);
console.log(sourceFolder_2)//for checking total image and folder making process
var secondImageTag = document.querySelectorAll("img")[1];//index changed from [0]
secondImageTag.setAttribute("src", sourceFolder_2);


//f)show result in h2 header
//f1)select the h2 tag
var result= document.querySelector("h2");
//f2)apply conditions
if(number>number_1){
   result.innerHTML="Player 1 won"
}
else if(number<number_1){
    result.innerHTML = "Player 2 won"
}
else{
    result.innerHTML = "Draw"
}