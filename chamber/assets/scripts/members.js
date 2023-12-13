const baseURL = "https://embrown92.github.io/wdd230/chamber/data/directory.html";
const membersURL = "https://embrown92.github.io/wdd230/chamber/data/directory.json";

const cards = document.querySelector("#cards");

// fecth members data
async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.setAttribute('class', 'dircard');

        // creat business name header
        let busName = document.createElement('h2');
        busName.setAttribute('class', 'direct');
        busName.textContent = `${member.name}`;

        // create image element
        let busIcon = document.createElement('img');
        busIcon.setAttribute('loading', 'lazy');
        member.icon.forEach((item) => {
            busIcon.setAttribute('src', item.source);
            busIcon.setAttribute('alt', item.altName);
            busIcon.setAttribute('width', item.width);
            busIcon.setAttribute('height', item.height);
            busIcon.setAttribute('loading', "lazy");
        });


        // loop through to address to make address line
        let street = document.createElement('p');
        street.setAttribute('class', 'direct');
        street.setAttribute('id', 'addressLine');
        member.address.forEach((part) => {
            street.innerHTML = `${part.street},${part.city}, ${part.state} ${part.zipcode}`;
        });

        // create phone number
        let phoneNum = document.createElement('h3');
        phoneNum.setAttribute('class', 'direct');
        phoneNum.setAttribute('id', 'phoneNum')
        phoneNum.textContent = `${member.phoneNumber}`;

        // create website element
        let website = document.createElement('a');
        website.setAttribute('class', 'direct');
        website.setAttribute('href', member.url);
        website.setAttribute('target', "_blank");
        website.textContent = member.url;


        // create member level
        let memLevel = document.createElement('h3');
        memLevel.setAttribute('class', 'direct');
        memLevel.textContent = `Member Level: ${member.memLevel}`;

        // Append the section(card) with the created elements
        card.appendChild(busName);
        card.appendChild(busIcon);
        card.appendChild(street);
        card.appendChild(phoneNum);
        card.appendChild(website);
        card.appendChild(memLevel);


        cards.appendChild(card);
    });
}

// activate the fetch to get member data
getMembers();


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