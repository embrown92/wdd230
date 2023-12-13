// Create list with days of the week to display banner
document.addEventListener('DOMContentLoaded', function () {
    let currentDay = new Date().getDay();
    let displayDays = [1, 2, 3];

    if (displayDays.includes(currentDay)) {
        displayEventBanner();
    }
});


// function to display banner and words
function displayEventBanner() {
    //get banner element
    let eventBanner = document.getElementById('event-banner');

    // creat list with words to display moving
    let bannerWords = ["Come join the Winter Garden Chamber of Commerce meet and greet on Wednesday at 7:00 P.M. ET"];

    //iterate through words list to create elements to display
    bannerWords.forEach(function (word) {
        let pElement = document.createElement('p');
        pElement.classList.add('moving-word');
        pElement.textContent = word;
        eventBanner.appendChild(pElement);
    });

    // create a close button for banner to be dismissed
    let closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    eventBanner.appendChild(closeButton);

    //listen for closing x to be pressed
    closeButton.addEventListener('click', closeEventBanner);

    eventBanner.style.display = 'block';
}

//function to close banner
function closeEventBanner() {
    let eventBanner = document.getElementById('event-banner');
    if (eventBanner) {
        eventBanner.style.display = 'none';
    }
}