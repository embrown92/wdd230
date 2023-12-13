// construct useful url links
const baseURL = "https://embrown92.github.io/wdd230/chamber/data/directory.html";
const membersURL = "https://embrown92.github.io/wdd230/chamber/data/directory.json";


//send request for data from members.json
async function getMembersToHighlight() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.log(data);
    displayMemberHighlights(data.members);
}

// activate fetch request
getMembersToHighlight();


//construct desired elements from data collected
const displayMemberHighlights = (members) => {
    // get only silver and gold members
    const highlightedMembers = members.filter(member => member.memLevel === 'Silver' || member.memLevel === 'Gold');

    //call function to help display members randomly
    const selecteMembers = getRandomMembers(highlightedMembers, 2, 3);

    //get div to display highlight info
    const highlightsContainer = document.getElementById('businesses');
    highlightsContainer.innerHTML = '';

    //iterate through member list to create elements for display
    selecteMembers.forEach((member) => {
        let highlightArt = document.createElement('article');
        highlightArt.setAttribute('class', 'highlight');

        let highlightDiv = document.createElement('div');
        highlightDiv.setAttribute('class', 'highlightCon');

        let highlightName = document.createElement('h3');
        highlightName.setAttribute('class', 'highlightName');


        highlightName.textContent = `${member.name}`;

        // create member level
        let memLevel = document.createElement('h4');
        memLevel.setAttribute('class', 'direct');
        memLevel.textContent = `Member Level: ${member.memLevel}`;

        let highlightImg = document.createElement('img');
        highlightImg.setAttribute('loading', 'lazy');
        member.icon.forEach((item) => {
            highlightImg.setAttribute('src', item.source);
            highlightImg.setAttribute('alt', item.altName);
            highlightImg.setAttribute('width', item.width);
            highlightImg.setAttribute('height', item.height);
            highlightImg.setAttribute('loading', "lazy");
        });

        let highlightAdd = document.createElement('h5');
        highlightAdd.setAttribute('class', 'highlightAddress');
        member.address.forEach((part) => {
            highlightAdd.innerHTML = `${part.street},${part.city}, ${part.state} ${part.zipcode}`;
        });

        let highlightAbout = document.createElement('p');
        highlightAbout.textContent = member.highlight;

        let highlightWeb = document.createElement('a');
        highlightWeb.setAttribute('class', 'highlightLink');
        highlightWeb.setAttribute('href', member.url);
        highlightWeb.setAttribute('target', "_blank");
        highlightWeb.textContent = member.url;



        //append child elements to div
        highlightDiv.appendChild(highlightName);
        highlightDiv.appendChild(memLevel);

        highlightDiv.appendChild(highlightAdd);
        highlightDiv.appendChild(highlightAbout);
        highlightDiv.appendChild(highlightWeb);

        highlightArt.appendChild(highlightImg);
        highlightArt.appendChild(highlightDiv);

        // append divs to container for display
        highlightsContainer.appendChild(highlightArt);
    });
}

// use builin math funcitons to select members randomly
const getRandomMembers = (highlightedMembers, min, max) => {
    const shuffled = highlightedMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
}