/* global $ */

// Test to confirm if DOM has loaded

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');
  }); 

  // Code for the login option
/*
  $(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        e.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'invitado'; // User validate
var ValidPassword = $('#password').val() === 'hgm2015'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "http://arkev.com"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});
*/

// Alternative code for login information
/*
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
*/

// Search bar code

function Search(item){
    var collection = document.getElementsByClassName("listItem");
    for (i = 0;i < collection.length; i++){
        if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
            collection[i].style.display = "block";
            } else {
                collection[i].style.display = "none";
                }
    }
}
/*

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

    let long;
    let lat;

    // To access the geographical location of the app user

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentUserPosition((position) => {
            // Creating variables to store longitude and latitude data
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const baseData = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2491cc71cba0e545977b5a5da46a7573}'

            // Using fetch to get the data from the API

            fetch (baseData)
            .then ((response) => {
                return response.json()
            })
            .then ((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const { sunrise, sunset } = data.sys;
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
*/

const api = '2491cc71cba0e545977b5a5da46a7573'

// Openweathermap API. Do not share it publicly.

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});

// Feedback card code

// Using DOM elements to create functionality
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

// Event Listener for the ratings option
ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }

})

// Event listener for the send button
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        
        Thank You!
        
        Feedback : ${selectedRating}
        We'll use your feedback to improve our customer support
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}