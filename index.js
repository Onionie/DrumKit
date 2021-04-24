
var numberOfDrums = document.querySelectorAll(".drum").length;

//Handles Clicking Event
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

//Sound Player Function
function makeSound(key){
  switch (key){
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
    case "d":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
      break;
    case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
      break;
    case "k":
        var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
      break;
      case "l":
          var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    default:
    console.log("Wrong Key");
  }
}

//Handles Key Animations
function buttonAnimation(currentkey){
  var activeKey = document.querySelector("." + currentkey);
  activeKey.classList.add("pressed");

  //remove class list after 0.100 seconds
  setTimeout(function() {
  activeKey.classList.remove("pressed");
}, 100);
}

for (var i = 0; i < numberOfDrums; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}
