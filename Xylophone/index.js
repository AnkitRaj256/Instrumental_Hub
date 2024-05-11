var n = 0;
while (n <= 8) {
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
        case "a":
            var xylo1 = new Audio("Sounds/1.mp3");
            xylo1.play();
            break;
        case "s":
            var xylo2 = new Audio("Sounds/2.mp3");
            xylo2.play();
            break;
        case "d":
            var xylo3 = new Audio("Sounds/3.wav");
            xylo3.play();
            break;
        case "w":
            var xylo4 = new Audio("Sounds/4.wav");
            xylo4.play();
            break;
        case "e":
            var xylo5 = new Audio("Sounds/5.wav");
            xylo5.play();
            break;
        case "j":
            var xylo6 = new Audio("Sounds/6.mp3");
            xylo6.play();
            break;
        case "k":
            var xylo7 = new Audio("Sounds/7.wav");
            xylo7.play();
            break;
        case "l":
            var xylo8 = new Audio("Sounds/8.wav");
            xylo8.play();
            break;
        case "i":
            var xylo9 = new Audio("Sounds/9.mp3");
            xylo9.play();
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



