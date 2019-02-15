let gamepads = navigator.getGamepads();

// For each controller, show all the button and axis information
for (let i = 0; i < gamepads.length; i++) {
    let gp = gamepads[i];
    let j;

    if (!gp || !gp.connected) {
        continue;
    }

    for (j = 0; j < gp.buttons.length; j++) {
        let button = gp.buttons[j];

        // Put the value in there
        buttonElem.innerHTML = button.value;

        // Change color if pressed or not
        if (button.pressed) {
            buttonElem.classList.add("pressed");
        } else {
            buttonElem.classList.remove("pressed");
        }
    }
}