export function createMenuBlock(container) {
    container.innerHTML = '';
    
    let moduleContainer = document.createElement("div");
    moduleContainer.classList.add('module-container');
    container.appendChild(moduleContainer);

    let title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = "Menu";
    moduleContainer.appendChild(title);

    let menuContainer = document.createElement("div");
    menuContainer.classList.add('menu-container');
    moduleContainer.appendChild(menuContainer);

    for (let i = 0; i < 10; i++) {
        let menuItem = document.createElement("div");
        menuItem.classList.add('menu-item');

        let itemTitle = document.createElement("h1");
        itemTitle.textContent = "Menu Item " + (i + 1);

        let itemImg = document.createElement("div");
        itemImg.classList.add('item-img');

        let itemDesc = document.createElement("p");
        itemDesc.textContent = "This is an example menu item description for menu item " + (i + 1);

        let itemCost = document.createElement("p");
        itemCost.textContent = "$9.99";

        menuContainer.appendChild(menuItem);
        menuItem.appendChild(itemTitle);
        menuItem.appendChild(itemImg);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemCost);
    }
}