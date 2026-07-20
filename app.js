const title = document.getElementById("title");
const text = title.textContent;

let index = 0;
let deleting = false;

function typeEffect() {

    if (!deleting) {
        title.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            deleting = true;
            setTimeout(typeEffect, 1500); // Pause after typing
            return;
        }
    } else {
        title.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

window.onload = typeEffect;