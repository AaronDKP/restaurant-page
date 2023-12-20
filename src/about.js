import aboutImg from '../src/img/about.svg';

function aboutPage () {


    const about = document.createElement('div');
    const img = new Image();
    const p = document.createElement('p');

    about.setAttribute('id', 'about');

    img.src = aboutImg;
    about.appendChild(img);

    p.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni similique saepe porro officia, quos minus rem animi. Voluptas possimus odit deserunt neque at, distinctio, dolor beatae hic incidunt itaque doloribus maxime et cumque nisi expedita magni repudiandae aliquid adipisci quos saepe? Deserunt error soluta quae dolor illo porro odio veniam accusantium enim, voluptates incidunt facere maxime temporibus id iste officia hic quas vel iusto veritatis esse molestiae odit ducimus? Reiciendis error harum corporis inventore eligendi, beatae dolores aliquid necessitatibus debitis, laudantium suscipit itaque sunt! Eos, rem eveniet! Laborum repellendus cupiditate quis ratione tenetur error debitis earum velit, totam eum fugit.';
    about.appendChild(p);

    return about;
}

export {aboutPage};