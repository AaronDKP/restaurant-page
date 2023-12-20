import { menuPage } from "./menu";
import homeImg from './src/img/home.svg';

function homePage () {
    const home = document.createElement('div');
    const img = new Image();
    const heading = document.createElement('h1');
    const btn = document.createElement('button');

    home.setAttribute('id', 'home');

    img.src = homeImg;
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