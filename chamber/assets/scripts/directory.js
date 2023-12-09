const baseURL = 'https://embrown92.github.io/wdd230/';
const url = 'https://embrown92.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

async function getDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);

    displayDirectory(data.prophets);
};

const displayDirectory = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('h4');
        let phone = document.createElement('h4');
        let image = document.createElement('img');

        name.innerHTML = `${member.name}`;
        address.innerHTML = `${member.address}`;
        phone.innerHTML = `${member.phonenumber}`;

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '450');
        image.setAttribute('height', '450');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);

        cards.appendChild(card);
    });
};

getDirectory();


