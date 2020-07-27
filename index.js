//mouse pressed
for(var i=0;i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
clickAndPress(this.innerHTML);
btnAnimation(this.innerHTML);
  })

}
//switch for key and mouse
function clickAndPress(val){
  switch (val) {
    case 'w':
    var aud=new Audio("sounds/crash.mp3");
    aud.play();
      break;
      case 'a':
      var aud=new Audio("sounds/kick-bass.mp3");
      aud.play();
        break;
        case 's':
        var aud=new Audio("sounds/snare.mp3");
        aud.play();
          break;
          case 'd':
          var aud=new Audio("sounds/tom-1.mp3");
          aud.play();
      break;
      case 'j':
    var aud=new Audio("sounds/tom-2.mp3");
    aud.play();
      break;
    case 'k':
    var aud=new Audio("sounds/tom-3.mp3");
  aud.play();
    break;
  case 'l':
  var aud=new Audio("sounds/tom-4.mp3");
  aud.play();
  break;
    default:console.log(this.innerHTML);

  }
}

//KEYBOARD PRESSED
document.addEventListener("keypress",function(event){
  clickAndPress(event.key);
  btnAnimation(event.key);
})

//BUTTON ANIMATION
function btnAnimation(animateKey){
  var selected=document.querySelector("."+animateKey);
  selected.classList.add("pressed");
  setTimeout(function(){
    selected.classList.remove("pressed");
  },100);

}
