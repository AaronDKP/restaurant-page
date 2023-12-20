import { menuPage } from "./menu";

function homePage () {
    const home = document.createElement('div');
    const img = new Image();
    const heading = document.createElement('h1');
    const btn = document.createElement('button');

    home.setAttribute('id', 'home');

    img.src = '../restaurant-page/src/img/home.svg';
    home.appendChild(img);

    heading.textContent = 'Ramen restaurant in Konohagakure';
    home.appendChild(heading);

    btn.setAttribute('id', 'homeBtn');
    btn.textContent = 'MENU';

    btn.addEventListener('click', () => {
        content.removeChild(content.lastChild);
        content.appendChild(menuPage());
    })

    home.appendChild(btn);

    return home;
}

export {homePage};