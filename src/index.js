import "./styles.css";
import { createHomeBlock } from "./modules/home.js";
import { createMenuBlock } from "./modules/menu.js";
import { createContactBlock } from "./modules/contact.js";

const navButtons = document.querySelectorAll('.nav-button-wrapper > button');
const container = document.querySelector("#content");

function fillContent(id) {
    switch (id) {
        case 'home':
            createHomeBlock(container);
            break;
    
        case 'menu':
            createMenuBlock(container);
            break

        case 'contact':
            createContactBlock(container);
            break

        default:
            createHomeBlock(container);
            break;
    }
}

navButtons.forEach((navButton) => {
    navButton.addEventListener('click', function() {
        fillContent(navButton.id);
    });
});

fillContent();