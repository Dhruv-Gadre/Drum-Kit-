var numberOfDrums = document.querySelectorAll(".drum").length;

// Make the evenListener to the entire document to check for a key press.
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    flashButton(event.key);
})


//Create a function to check for the required event.
function makeSound(key) {

    switch (key) {

        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log("Button clicked: " + buttonInnerHTML);
            break;
    }
}

// make the sound when the button is clicked
for (var j = 0; j < numberOfDrums; j++) {
    document.querySelectorAll(".drum")[j].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        flashButton(buttonInnerHTML);
    });
};


//Function to make the button flash when clicked/key is pressed
function flashButton(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    //Wait for sometime and then remove the flash, It waits for 100ms

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}