import '../src/style.css';
import {homePage} from '../src/home.js';
import {menuPage} from '../src/menu.js';
import {aboutPage} from '../src/about.js';

const content = document.getElementById('content');
content.appendChild(homePage());

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');
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