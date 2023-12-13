const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('.current-cond');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=30.26&lon=-97.74&appid=7599729bf592d9ab73a8b0fdaa28e1df&units=imperial`;
const urlForecaset = `https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.74&cnt=28&appid=7599729bf592d9ab73a8b0fdaa28e1df&units=imperial`

// fetch current weather API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function
apiFetch();

// function to display result from current weather api
function displayResults(data) {
    // display current temp
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

    // create url to get weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // variable for weather description
    let desc = data.weather[0].description;

    // getting container for image icon
    let todayDiv = document.querySelector('#today');

    // creating img element and setting attributes
    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('id', 'weather-icon');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Toaday Conditions ${desc}`);
    weatherIcon.setAttribute('width', "50");
    weatherIcon.setAttribute('height', "50");

    // inserting image element before the last child element
    todayDiv.insertBefore(weatherIcon, todayDiv.childNodes[todayDiv.childNodes.length - 2]);

    // creating content for conditions element
    captionDesc.textContent = `${desc}`;
}

// fetch for forecast API
async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecaset);
        if (response.ok) {
            const dataForecast = await response.json();
            // console.log(dataForecast);
            displayForecastResults(dataForecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// calling forecast API
apiFetchForecast();

// function to process forecast API data
function displayForecastResults(dataForecast) {
    const forecastList = dataForecast.list;

    // container variable for data elements
    const forecastContainer = document.getElementById('forecast-container');

    // dictionary for forecast days
    const temperaturesByDay = {}

    // Get the current day index
    const currentDayIndex = new Date().getDay();

    // Iterate through the list array
    forecastList.forEach((forecastItem) => {
        // Extract relevant information
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const dayIndex = date.getDay();

        if (dayIndex === currentDayIndex) {
            return; //if today, skip first day
        }

        const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day of the week


        // parse the day data into the dictionary with day as the key
        if (!temperaturesByDay[day]) {
            temperaturesByDay[day] = {
                minTemp: forecastItem.main.temp_min,
                maxTemp: forecastItem.main.temp_max,
                icon: forecastItem.weather[0].icon,
                description: forecastItem.weather[0].description,
            };
        } else { //the else checks the other min and max values for the day to make sure the lowest and highest are in the dictionary
            temperaturesByDay[day].minTemp = Math.min(temperaturesByDay[day].minTemp, forecastItem.main.temp_min);
            temperaturesByDay[day].maxTemp = Math.max(temperaturesByDay[day].maxTemp, forecastItem.main.temp_max);
        }
    });

    // I only want to display 3 forecast days, so this is the start of a day count
    let dayCount = 0;
    for (const day in temperaturesByDay) {
        if (dayCount >= 3) {
            break;
        }

        //Iterate through the dictionary days to display data
        const temperatures = temperaturesByDay[day];  //day variable
        // create the div for the forecast data
        const forecastDayElement = document.createElement('div');
        forecastDayElement.classList.add('forcast-day');

        // create icon url
        const iconsrc = `https://openweathermap.org/img/wn/${temperatures.icon}.png`;

        // create day element
        let forecastName = document.createElement('h4');
        forecastName.textContent = `${day}:`;

        // Min/max p element
        // let minMax = document.createElement('p');
        // minMax.textContent = 'Min/Max:';

        // create p element and value for min/max
        let temps = document.createElement('h5');
        temps.textContent = `${temperatures.minTemp.toFixed(0)}°F/${temperatures.maxTemp.toFixed(0)}°F`

        // create conditions element
        let forecastDesc = document.createElement('h5');
        forecastDesc.setAttribute('class', "current-cond");
        forecastDesc.textContent = temperatures.description;

        // create image element
        let forecastIcon = document.createElement('img');
        forecastIcon.setAttribute('src', iconsrc);
        forecastIcon.setAttribute('id', 'forecast-icon');
        forecastIcon.setAttribute('alt', `${day} condition ${forecastDesc}`);
        forecastIcon.setAttribute('width', "50");
        forecastIcon.setAttribute('height', "50");

        // append day elements to div container
        forecastDayElement.append(forecastName);
        // forecastDayElement.append(minMax);
        forecastDayElement.append(temps);
        forecastDayElement.append(forecastIcon);
        forecastDayElement.append(forecastDesc);


        // append forecast day to container
        forecastContainer.appendChild(forecastDayElement);

        // add a day to count
        dayCount++;
    }
}

// add link to join button
let joinBtn = document.getElementById('join');
joinBtn.addEventListener('click', function () {
    window.location.href = 'join.html';
});