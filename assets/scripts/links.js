const baseURL = 'https://embrown92.github.io/wdd230/';
const linksURL = 'https://embrown92.github.io/wdd230/data/links.json';

const learningActivities = document.querySelector('#learningActivities');

async function getActivityList() {
    const response = await fetch(linksURL);
    const activitiesData = await response.json();
    //console.log(activitiesData);
    displayWeeks(activitiesData.weeks);
};

const displayWeeks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement('li');

        li.textContent = `${week.week} :`;

        const activityLinksArray = week.links;

        activityLinksArray.forEach((activity) => {
            const activityURL = document.createElement('a');
            activityURL.setAttribute('href', `${activity.url}`);
            activityURL.setAttribute('target', '_blank');
            activityURL.textContent = `${activity.title} |`;
            li.appendChild(activityURL);
        })

        learningActivities.appendChild(li);
    });
};


getActivityList();