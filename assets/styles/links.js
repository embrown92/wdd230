const url = /*add url here*/ ;

const cards = document.querySelector('#cards');

async function getWeekData() {
    const response = await fetch(url);
    const data = await response.json();

    // note that we reference the prophets array of the JSON data object, not just the object
    displayWeeks(data.weeks);
};

const displayWeeks = (weeks) => {
    // card build goes here
    weeks.forEach((week) => {
        // create elements to add to the div .cards element
        let card = document.createElement('section');
        let ul = document.createElement('ul');
        let li = document.createElement('li')
        let a = document.createElement('a');

        a.textContent = `${weeks.links.title} |`;

        a.setAttribute('url', weeks.links.url);

        // Append the section (card) with created elements
        card.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(a);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
};

getWeekData();

