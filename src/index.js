// Test to confirm if DOM has loaded

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');
  }); 

  // Code for the login option

  // Using DOM to access elements

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Button for form input

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

  // The key used to acquire the OpenWeatherApp API

const apikey = "2491cc71cba0e545977b5a5da46a7573"

// Accessing the DOM elements and changing the variables.

const iconImage = document.getElementById('weather-image');
const description = document.querySelector('.description');
const locationUser = document.querySelector('#userlocation');
const sunrise = document.querySelector('.sunriseinfo');
const sunset = document.querySelector('.sunsetinfo');
const temperatureCelcius = document.querySelector('.c');
const temperatureFahrenheit = document.querySelector('.f');


// Ann event listener that loades every time the page loades

window.addEventListener('load', () => {

    let longitude;
    let latitude;

    // To access the geographical location of the app user

    if(navigator.geographicalLocation) {
        navigator.geographicalLocation.getCurrentUserPosition((position) => {
            // Creating variables to store longitude and latitude data
            longitude = position.coordinates.longitude;
            latitude = position.coordinates.latitude;

            const baseData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

            // Using fetch to get the data from the API

            fetch (baseData)
            .then ((response) => {
                return response.json()
            })
            .then ((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const { sunrise, sunset } = data.time;
        // URL for the image icon to be displayed
        const imageIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        // Formula used to convert the temperature from celcius to fahrenheit
        const fahrenheit = (temp * 9) / 5 + 32;

        // Converting the time and date data into East Africa Time (EAT)
        const sunriseEAT = new Date(sunrise * 1000);
        const sunsetEAT = new Date(sunset * 1000);

        // Using the DOM to display the data Fetched

        iconImage.src = imageIconUrl
        description.textContent = `${description}`;
        locationUser.textContent = `${place}`;
        sunrise.textContent = `${sunriseEAT.toLocaleDateString()}, ${sunriseEAT.toLocaleTimeString()}`;
        sunset.textContent = `${sunsetEAT.toLocaleDateString()}, ${sunsetEAT.toLocaleTimeString()}`;
        temperatureCelcius.textContent = `${temp.toFixed(2)} °C`;
        temperatureFahrenheit.textContent = `${fahrenheit.toFixed(2)} °F`;

        });
    });
    }
});
