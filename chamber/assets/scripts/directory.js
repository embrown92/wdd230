
const baseURL = 'https://embrown92.github.io/wdd230/chamber/data/directory.html';
const URL = 'https://embrown92.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

async function getDirectory() {
    const response = await fetch(URL);
    const data = await response.json();
    displayDirectory(data.members);
};

const displayDirectory = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');

        let businessName = document.createElement('h3');
        businessName.textContent = `${member.name}`;

        let businessIcon = document.createElement('img');
        businessIcon.setAttribute('loading', 'lazy');
        member.icon.forEach((item) => {
            businessIcon.setAttribute('src', item.source);
            businessIcon.setAttribute('alt', item.altName);
            businessIcon.setAttribute('width', item.width);
            businessIcon.setAttribute('height', item.height);
            businessIcon.setAttribute('loading', "lazy");
        });


        let businessAdd = document.createElement('p');
        businessAdd.setAttribute('id', 'addressLine');
        member.address.forEach((info) => {
            street.innerHTML = `${info.street}, <br>${info.city}, ${info.state} ${info.zipcode}`;
        });

        let phoneNum = document.createElement('p');
        phoneNum.setAttribute('id', 'phoneNum')
        phoneNum.textContent = `${member.phone}`;

        let website = document.createElement('a');
        website.setAttribute('href', member.url);
        website.setAttribute('target', "_blank");
        website.textContent = member.url;


        let memberLevel = document.createElement('p');
        memberLevel.textContent = `Member Level: ${member.memberLevel}`;


        card.appendChild(businessName);
        card.appendChild(businessIcon);
        card.appendChild(businessAdd);
        card.appendChild(phoneNum);
        card.appendChild(website);
        card.appendChild(memeberLevel);

        cards.appendChild(card);
    });
};

// program buttons to be toggled between list and grid.  Grid is default.
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

