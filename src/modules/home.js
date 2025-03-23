export function createHomeBlock(container){
    container.innerHTML = '';

    let moduleContainer = document.createElement("div");
    moduleContainer.classList.add('module-container');
    container.appendChild(moduleContainer);

    let title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = "Austin's BBQ";
    moduleContainer.appendChild(title);

    let about = document.createElement("div");
    about.classList.add('about');
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    moduleContainer.appendChild(about);

    let hours = document.createElement("div");
    hours.classList.add('hours');
    moduleContainer.appendChild(hours);

    let hoursTitle = document.createElement("h1");
    hoursTitle.textContent = "Hours";
    hours.appendChild(hoursTitle);

    let hourM = document.createElement("p");
    hourM.textContent = "M: 8:00AM - 5:00PM";
    let hourT = document.createElement("p");
    hourT.textContent = "T: 8:00AM - 5:00PM";
    let hourW = document.createElement("p");
    hourW.textContent = "W: 8:00AM - 5:00PM";
    let hourTh = document.createElement("p");
    hourTh.textContent = "Th: 8:00AM - 5:00PM";
    let hourF = document.createElement("p");
    hourF.textContent = "F: 8:00AM - 5:00PM";
    let hourSa = document.createElement("p");
    hourSa.textContent = "Sat: 8:00AM - 5:00PM";
    let hourSu = document.createElement("p");
    hourSu.textContent = "Sun: 8:00AM - 5:00PM";

    hours.appendChild(hourM);
    hours.appendChild(hourT);
    hours.appendChild(hourW);
    hours.appendChild(hourTh);
    hours.appendChild(hourF);
    hours.appendChild(hourSa);
    hours.appendChild(hourSu);

    let location = document.createElement("div");
    location.classList.add('location');
    moduleContainer.appendChild(location);

    let locationTitle = document.createElement("h1");
    locationTitle.textContent = "Location";
    location.appendChild(locationTitle);

    let locationBody = document.createElement("p");
    locationBody.textContent = "12345 Some Street Rd, City, State, Zip";
    location.appendChild(locationBody);
}
