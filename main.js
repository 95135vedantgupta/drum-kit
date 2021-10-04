var noOfButtons = document.querySelectorAll(".drum").length; //using dot since we are accessing a class

for(var i = 0; i<noOfButtons ; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {   // second CURLY BRACKET AT END!!! AND again using dot AND adding event listener for ith drum AND adding an anonymous function
//here function has paranthesis because it is called immidiately on clicking
    var innerHTMLofDrum = this.innerHTML;  //this accesses the ith drum
    soundOnPressingKeyOrButton(innerHTMLofDrum);

    toAnimate(innerHTMLofDrum);    //function call for animation

  });    //semicolon here as function ends here AND CURLY BRACKET FOR querySelectorAll ENDS here!!!!!

};

//to make sound on pressing a key is below

document.addEventListener("keydown",function(buttonWePress){      //buttonWePress is an event...and the event reference was keydown....so basically we run the soundOnPressingKeyOrButton function on pressing the KEY of buttonWePress.
  soundOnPressingKeyOrButton(buttonWePress.key);
  toAnimate(buttonWePress.key);   //function call for animation
});


//main function called to make sound is below

function soundOnPressingKeyOrButton(key){

  switch (key) {       //switch syntax
    case "w":
    var tom1= new Audio("sounds/tom-1.mp3");         //to play audio
    tom1.play();
      break;

    case "a":
    var tom2= new Audio("sounds/tom-2.mp3");           // this AND
    tom2.play();                                       //this....they both are lines pf 1 constructor function
      break;

    case "s":
    var tom3= new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;

    case "d":
    var tom4= new Audio("sounds/tom-4.mp3");
    tom4.play();
      break;

    case "j":
    var snare= new Audio("sounds/snare.mp3");
    snare.play();
      break;

    case "k":
    var crash= new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "l":
    var kick= new Audio("sounds/kick-bass.mp3");
    kick.play();
      break;

    default:    //for the case when none of the above keys are pressed/touched

  }
};

function toAnimate(animateVar){

  var activeButton=document.querySelector("."+animateVar);    //"." added since we want to access class of thet button
  activeButton.classList.add("animated");                   //adding css class for animation in class LIST!
  setTimeout( function(){activeButton.classList.remove("animated");} , 100);   //removing the added class after 100ms.
};
