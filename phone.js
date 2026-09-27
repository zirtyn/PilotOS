const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-number]");
const keySound = new Audio("sounds/typing.mp3");


buttons.forEach(button => {
    button.addEventListener("click", () => {

        keySound.currentTime = 0;
        keySound.play();

        display.value += button.dataset.number;

    });

});

const deleteButton = document.getElementById("delete");
let deleteTimer;
let longPress = false;

    // deleteButton.addEventListener("click", () => {

        // display.value = display.value.slice(0, -1);
        
        deleteButton.addEventListener("pointerdown", () => {

            longPress = false;

            deleteTimer = setTimeout(() => {
                display.value = "";
                longPress = true;
            }, 400);

        });

        deleteButton.addEventListener("pointerup", () => {

            clearTimeout(deleteTimer);

            if (!longPress) {
                display.value = display.value.slice(0, -1);
            }
            document.getElementById("status").textContent = "";

        });

const callButton = document.getElementById("call");
let timeoutStatus;

callButton.addEventListener("click", () => {

    if (display.value.length < 9) {
        document.getElementById("status").textContent = "";

        clearTimeout(timeoutStatus);

        timeoutStatus = setTimeout(() => {
            status.textContent = "";
        }, 2000);

    } else {
        document.getElementById("status").textContent = "Não foi possível completar a ligação";

        clearTimeout(timeoutStatus);

        timeoutStatus = setTimeout(() => {
            status.textContent = "";
        }, 2000);

    }

});