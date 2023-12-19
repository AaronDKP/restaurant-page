import '../src/style.css';
import {homePage} from '../src/home.js';
import {menuPage} from '../src/menu.js';
import {aboutPage} from '../src/about.js';

const content = document.getElementById('content');
content.appendChild(homePage());

const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
    btn.addEventListener('click', () => {
        switch(btn.textContent){
            case 'HOME': 
                content.removeChild(content.lastChild);
                content.appendChild(homePage());
                break;
            case 'MENU':
                content.removeChild(content.lastChild);
                content.appendChild(menuPage());
                break;
            case 'ABOUT':
                content.removeChild(content.lastChild);
                content.appendChild(aboutPage());
                break;
        }
    })
}