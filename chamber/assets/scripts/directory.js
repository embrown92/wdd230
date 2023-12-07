const baseURL = 'https://embrown92.github.io/wdd230/';
const url = 'https://embrown92.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

async function getBusinessDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayDirectory(data.infos);
};

const displayDirectory = (infos) => {
    infos.forEach((info) => {
        let card = document.createElement('section');
        let buzName = document.createElement('h2');
        let buzAdd = document.createElement('h4');
        let buzPhone = document.createElement('h4');
        let buzImage = document.createElement('img');
        let button = document.createElement('button');

        // const buzUrlArray = info.website;

        // buzUrlArray.forEach((link) => {
        //     const buzUrl = document.createElement('a');
        //     buzUrl.setAttribute('href', `${link.website}`);
        //     buzUrl.setAttribute('target', '_blank');
        //     buzUrl.textContent = `Visit Website`;
        //     button.appendChild(buzUrlArray);
        // })

        buzName.textContent = `${info.name}`;
        buzAdd.textContent = `${info.address}`;
        buzPhone.textContent = `${info.phonenumber}`;

        buzImage.setAttribute('src', info.imageurl);
        buzImage.setAttribute('alt', `Image from ${info.name}`);
        buzImage.setAttribute('loading', 'lazy');
        buzImage.setAttribute('width', '450');
        buzImage.setAttribute('height', '450');

        card.appendChild(buzImage);
        card.appendChild(buzName);
        card.appendChild(buzAdd);
        card.appendChild(buzPhone);
        card.appendChild(button);

        cards.appendChild(card);
    });
};

getBusinessDirectory();


