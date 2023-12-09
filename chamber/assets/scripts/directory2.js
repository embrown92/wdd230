const url = 'https://embrown92.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('#cards');

document.addEventListener('touchstart', onTouchStart, { passive: true });

async function getDirectory() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayDirectory(data.members);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error)
    }
};

const displayDirectory = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');

        name.textContent = `${member.name}`;

        image.setAttribute('src', members.imageurl);

        card.appendChild(name);
        card.appendChild(image);

        cards.appendChild(card);
    });
};

getDirectory();