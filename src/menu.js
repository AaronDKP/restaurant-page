function menuPage () {
    const menu = document.createElement('div');
    const img = new Image();
    const menuContainer = document.createElement('div');

    menu.setAttribute('id', 'menu');
    menuContainer.setAttribute('id', 'menu-container');

    img.src = './src/img/menu.svg';
    menu.appendChild(img);


    for(let i = 0; i < 6; i++){
        const menuItem = document.createElement('div');
        const menuItemTitle = document.createElement('div');
        const h2 = document.createElement('h2');
        const lineSpacer = document.createElement('div');
        const itemPrice = document.createElement('div');
        const p = document.createElement('p');

        menuItem.classList.add(`menu-item`);
        menuItemTitle.classList.add('menu-item-title');
        lineSpacer.classList.add('line-spacer');
        itemPrice.classList.add('item-price');

        switch(i) {
            case 0: 
                h2.textContent = 'CLASSIC TONKOTSU RAMEN';
                itemPrice.textContent = '18.00';
                p.textContent = 'Our signature ramen. Fully customizable and made completely in-house *Pork bone broth';
                break;
            case 1: 
                h2.textContent = 'PREMIUM YAKIBUTA';
                itemPrice.textContent = '16.00';
                p.textContent = 'Smoky yet sweet marinated pork in thick slices';
                break;
            case 2: 
                h2.textContent = 'VEGGIE RAMEN';
                itemPrice.textContent = '16.00';
                p.textContent = 'Vegetarian ramen with a light, yet flavorful Dashi broth *Not vegan';
                break;
            case 3: 
                h2.textContent = 'ASAHI SUPER DRY DRAFT BEER';
                itemPrice.textContent = '8.00';
                p.textContent = 'Japanese lager';
                break;
            case 4: 
                h2.textContent = 'RAMUNE';
                itemPrice.textContent = '6.00';
                p.textContent = 'Japanese soda';
                break;
            case 5: 
                h2.textContent = 'SAKE';
                itemPrice.textContent = '12.00';
                p.textContent = 'Variety of Japanese sake and shochu available';
                break;
        }

        menuItemTitle.appendChild(h2);
        menuItemTitle.appendChild(lineSpacer);
        menuItemTitle.appendChild(itemPrice);
    
        menuItem.appendChild(menuItemTitle);
        menuItem.appendChild(p);
    
        menuContainer.appendChild(menuItem);
    }

    menu.appendChild(menuContainer);

    return menu;
}

export {menuPage};