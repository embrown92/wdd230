
const baseURL = 'https://embrown92.github.io/wdd230/chamber/data/directory.html';
const URL = 'https://embrown92.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

async function getDirectory() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayDirectory(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
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
        let businessAdd = document.createElement('h4');
        addressArray.forEach((info) => {
            businessAdd.innerHTML = `${info.street}, <br>${info.city}, ${info.state} ${info.zipcode}`;
        });

        let phoneNum = document.createElement('h4');
        phoneNum.textContent = `${member.phone}`;

        let websiteArray = member.url;
        let websiteButton = document.createElement('button');
        websiteArray.forEach((link) => {
            let websiteURL = document.createElement('a');
            websiteURL.setAttribute('href', link.url);
            websiteURL.setAttribute('target', "_blank");
        });

        let memberLevel = document.createElement('h4');
        memberLevel.textContent = `Member Level: ${member.memLevel}`;

        card.appendChild(businessName);
        card.appendChild(businessIcon);
        card.appendChild(businessAdd);
        card.appendChild(phoneNum);
        card.appendChild(websiteButton);
        card.appendChild(memberLevel);

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

