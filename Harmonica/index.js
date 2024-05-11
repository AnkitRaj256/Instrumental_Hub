var n = 0;
while (n <= 9) {
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
            var harmonica1 = new Audio("Sounds/1.0.mp3");
            harmonica1.play();
            break;
        case "s":
            var harmonica2 = new Audio("Sounds/2.0.mp3");
            harmonica2.play();
            break;
        case "d":
            var harmonica3 = new Audio("Sounds/3.0.mp3");
            harmonica3.play();
            break;
        case "w":
            var harmonica4 = new Audio("Sounds/4.0.mp3");
            harmonica4.play();
            break;
        case "e":
            var harmonica5 = new Audio("Sounds/5.0.mp3");
            harmonica5.play();
            break;
        case "j":
            var harmonica6 = new Audio("Sounds/6.0.mp3");
            harmonica6.play();
            break;
        case "k":
            var harmonica7 = new Audio("Sounds/7.0.mp3");
            harmonica7.play();
            break;
        case "l":
            var harmonica8 = new Audio("Sounds/8.0.mp3");
            harmonica8.play();
            break;
        case "i":
            var harmonica9 = new Audio("Sounds/9.0.mp3");
            harmonica9.play();
            break;
        case "m":
            var harmonica10 = new Audio("Sounds/10.0.mp3");
            harmonica10.play();
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



