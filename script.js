

var apiKey = "a732740e9afd7858896a61e89013252f";
//5 day search by city
var cityFiveDay = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=imperial';

// current weather by city
var cityCurrent = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial';

//Variables from module 6. Replace classes and reconfigure to the city name button
//was userFormEl
var searchFormEl = document.querySelector('#searchForm');
//was nameInputEl
var searchInputEl = document.querySelector('#searchInput');
var repoContainerEl = document.querySelector("#repos-container");
//was repoSearchTerm
var titleText = document.querySelector("#titleText");

//CODE FROM MODULE 6. SEARCH INPUT creates a div and pulls info from API//
//need to refigure, to display search info in the cards, and create a 
//button with the city name that will be stored and clickable


// search bar input
var formSubmitHandler = function(event) {
    event.preventDefault();
  //gets value from searchInputEl
    var cityName = searchInputEl.value.trim();
  
      if (cityName) {
        getCity (cityName);
  //clears the form after search
        searchInputEl.value = "";
      } else {
        alert("Please enter valid city.");
      }
    console.log(event);
  };
  
  
  //function to fetch from API
  var getCity  = function(city) {
    var apiUrlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a732740e9afd7858896a61e89013252f&units=imperial";
    
    fetch(apiUrlCurrent).then(function(response) {
      if (response.ok) {
        console.log(response);
          response.json().then(function(data) { 
  //when response data is converted to JSON, it gets sent from getCity  to displayCity
              displayCity(data, city);
              console.log(data);
            });
          }  else {
            alert("Please search for a valid city.");
          }
      });
  }; 
  
  //accepts the array of repository data, and the term we searched for as parameters
  var displayCity = function(city, searchTerm) {
  //clear old content from repos display
  titleText.textContent = "";
  titleText.textContent = city.name;
    console.log(city);
    console.log(searchTerm);

    var todayDescEl = document.querySelector('#todayDesc');
    todayDescEl.textContent = city.weather[0].description;

    var tempEl = document.querySelector("#temp");
    tempEl.textContent = 'Temp: ' + city.main.temp + 'F';

    var windEl = document.querySelector("#wind");
    windEl.textContent = 'Wind: ' + city.wind.speed + 'mph';

    var humidityEl = document.querySelector("#humidity");
    humidityEl.textContent = 'Humidity: ' + city.main.humidity + '%';
  }
 
  
  
  searchFormEl.addEventListener("submit", formSubmitHandler);
