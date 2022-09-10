//detecting button press
for(var i=0;i< document.querySelectorAll(".drum").length ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
function handleclick(){
  var buttoninnerHTML= this.innerHTML;
  makeSound(buttoninnerHTML);
 buttonanimation(buttoninnerHTML);

}}
// detecting keyboard keypress
document.addEventListener("keypress",function(event){
makeSound(event.key);
buttonanimation(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio("tom-1.mp3");
            tom1.play();
            break;
            case "a":
            var tom2= new Audio("tom-2.mp3");
            tom2.play();
            break;
            case "s":
            var tom3= new Audio("tom-3.mp3");
            tom3.play();
            break;
            case "d":
            var tom4= new Audio("tom-4.mp3");
            tom4.play();
            break;
            case "j":
                var crash= new Audio("crash.mp3");
                crash.play();
            break;
            case "k":
                var kickbass= new Audio("kick-bass.mp3");
                kickbass.play();
            
            break;
            case "l":
            var snare= new Audio("snare.mp3");
            snare.play();
            break;
            default: console.log(buttoninnerHTML);
    }
}
// animation function in javascript

function buttonanimation(currentkey){
var activekey=document.querySelector("." + currentkey);
activekey.classList.add("pressed");
setTimeout(function(){
    activekey.classList.remove("pressed")
},100);
}

