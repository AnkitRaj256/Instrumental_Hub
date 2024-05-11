var n = 0;
while (n <= 6) {
    document.querySelectorAll('button')[n].addEventListener("click", function handleClick() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    n++;
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var flute1 = new Audio("Sounds/1.0.mp3");
            flute1.play();
            break;
        case "a":
            var flute2 = new Audio("Sounds/2.0.mp3");
            flute2.play();
            break;
        case "s":
            var flute3 = new Audio("Sounds/3.0.mp3");
            flute3.play();
            break;
        case "d":
            var flute4 = new Audio("Sounds/4.0.mp3");
            flute4.play();
            break;
        case "j":
            var flute5 = new Audio("Sounds/5.0.mp3");
            flute5.play();
            break;
        case "k":
            var flute6 = new Audio("Sounds/6.0.mp3");
            flute6.play();
            break;
        case "l":
            var flute7 = new Audio("Sounds/7.0.mp3");
            flute7.play();
            break;

        default:
            console.log(key);
            break;
    }
}
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}



