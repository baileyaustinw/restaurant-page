export function createContactBlock(container) {
    container.innerHTML = '';
    
    let titleContainer = document.createElement("div");
    titleContainer.classList.add('module-container');
    container.appendChild(titleContainer);

    let title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = "Contact";
    titleContainer.appendChild(title);
}