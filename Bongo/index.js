var n = 0;
while (n <= 3) {
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
            var bongo3 = new Audio("sounds/bongo3.mp3");
            bongo3.play();
            break;
        case "s":
            var bongo4 = new Audio("sounds/bongo4.mp3");
            bongo4.play();
            break;
        case "k":
            var bongo1 = new Audio("sounds/bongo1.mp3");
            bongo1.play();
            break;
        case "l":
            var bongo2 = new Audio("sounds/bongo2.mp3");
            bongo2.play();
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



