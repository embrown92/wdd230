const url = "https://github.com/embrown92/wdd230/chamber/data/directory.json";

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of the retrieval

    // note that we reference the prophets array of the JSON data object, not just the object
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    // card build goes here
    prophets.forEach((prophet) => {
        // create elements to add to the div .cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birth = document.createElement('h3');

        let portrait = document.createElement('img');

        // build the h2 content out to show the propehts full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Birthday: ${prophet.birthdate}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section (card) with created elements
        card.appendChild(fullName);
        card.appendChild(birth);

        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
};


getProphetData();


