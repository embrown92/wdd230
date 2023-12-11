
const baseURL = 'https://embrown92.github.io/wdd230/chamber/data/directory.html';
const URL = 'https://embrown92.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

async function getDirectory() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    displayDirectory(data.members);
};

const displayDirectory = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');

        let businessName = document.createElement('h3');
        businessName.textContent = `${member.name}`;

        let imageInfoArray = member.icon;
        let businessImage = document.createElement('img');
        businessImage.setAttribute('loading', 'lazy');
        imageInfoArray.forEach((image) => {
            businessImage.setAttribute('src', image.source);
            businessImage.setAttribute('alt', image.altName);
            businessImage.setAttribute('width', image.width);
            businessImage.setAttribute('height', image.height);
            businessImage.setAttribute('loading', "lazy");
        });

        let addressArray = member.address;
        let businessAdd = document.createElement('p');
        addressArray.forEach((info) => {
            businessAdd.innerHTML = `${info.street}, <br>${info.city}, ${info.state} ${info.zipcode}`;
        });

        let phoneNum = document.createElement('p');
        phoneNum.textContent = `${member.phone}`;

        let websiteButton = document.createElement('button');
        let websiteArray = member.url;
        websiteArray.forEach((link) => {
            let websiteURL = document.createElement('a');
            websiteURL.setAttribute('href', member.url);
            websiteURL.setAttribute('target', "_blank");
            websiteURL.textContent = member.url;
        });

        let memberLevel = document.createElement('p');
        memberLevel.textContent = `Member Level: ${member.memberLevel}`;

        card.appendChild(businessName);
        card.appendChild(businessIcon);
        card.appendChild(businessAdd);
        card.appendChild(phoneNum);
        card.appendChild(websiteButton);
        card.appendChild(memeberLevel);

        cards.appendChild(card);
    });
};

// program buttons to be toggled between list and grid
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

cards.classList.add("grid");

listbutton.addEventListener("click", () => {
    cards.classList.toggle("list");
});

gridbutton.addEventListener("click", () => {
    cards.classList.remove("list");
});


getDirectory();

