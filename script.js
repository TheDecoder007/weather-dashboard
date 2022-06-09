var apiKey = "a732740e9afd7858896a61e89013252f";
//5 day search by city
var cityFiveDay =
  "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=imperial";

// current weather by city
var cityCurrent =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial";

//Variables from module 6. Replace classes and reconfigure to the city name button
//was userFormEl
var searchFormEl = document.querySelector("#searchForm");
//was nameInputEl
var searchInputEl = document.querySelector("#searchInput");
//was repoContainerEl
var btnContainerEl = document.querySelector("#buttonDiv");
//was repoSearchTerm
var titleText = document.querySelector("#titleText");
var createdBtnEl = document.querySelector('#createdBtn');


//FORMHANDLER for created buttons
// var formSubmitHandler2 = function (event) {
//   event.preventDefault();
//   //gets value from searchInputEl
//   var cityName = createBtnEl.buttonEl.innerHTML.value.trim();

//   if (cityName) {
//     getCity(cityName);
//     //clears the form after search
//     searchInputEl.value = "";
//   } else {
//     alert("Please enter valid city.");
//   }
//   console.log(event);
// };

//SEARCH INPUT creates a div and pulls info from API
// search bar input
var formSubmitHandler = function (event) {
  event.preventDefault();
  //gets value from searchInputEl
  var cityName = searchInputEl.value.trim();

  if (cityName) {
    getCity(cityName);
    //clears the form after search
    searchInputEl.value = "";
  } 
  // else {
  //   alert("Please enter valid city.");
  // }
  console.log(event);
};

//function to fetch from API
var getCity = function(city) {
  var apiUrlCurrent =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=a732740e9afd7858896a61e89013252f&units=imperial";

  fetch(apiUrlCurrent).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        //when response data is converted to JSON, it gets sent from getCity  to displayCity
        displayCity(data, city);
        //console.log(data);
      });
    } else {
      alert("Please search for a valid city.");
    }
  });
};

//accepts the array of repository data, and the term we searched for as parameters
var displayCity = function (city, searchTerm) {
  //clear old content from city display
  titleText.textContent = "";
  titleText.textContent = city.city.name + " Today";
  //console.log(city);
  console.log(searchTerm);

  //CURRENT DAY
  var todayDescEl = document.querySelector("#todayDesc");
  todayDescEl.textContent = city.list[0].weather[0].description;

  var tempEl = document.querySelector("#temp");
  tempEl.textContent = "Temp: " + city.list[0].main.temp + "F";

  var windEl = document.querySelector("#wind");
  windEl.textContent = "Wind: " + city.list[0].wind.speed + "mph";

  var humidityEl = document.querySelector("#humidity");
  humidityEl.textContent = "Humidity: " + city.list[0].main.humidity + "%";

  //5 DAY

  //DAY1
  var todayDate1 = document.querySelector("#date1")
  todayDate1.textContent = city.list[5].dt_txt;

  var todayDescEl1 = document.querySelector("#todayDesc1");
  todayDescEl1.textContent = city.list[5].weather[0].description;

  var tempEl1 = document.querySelector("#temp1");
  tempEl1.textContent = "Temp: " + city.list[5].main.temp + "F";

  var windEl1 = document.querySelector("#wind1");
  windEl1.textContent = "Wind: " + city.list[5].wind.speed + "mph";

  var humidityEl1 = document.querySelector("#humidity1");
  humidityEl1.textContent = "Humidity: " + city.list[5].main.humidity + "%";

  //DAY 2
  var todayDate2 = document.querySelector("#date2")
  todayDate2.textContent = city.list[13].dt_txt;

  var todayDescEl2 = document.querySelector("#todayDesc2");
  todayDescEl2.textContent = city.list[13].weather[0].description;

  var tempEl2 = document.querySelector("#temp2");
  tempEl2.textContent = "Temp: " + city.list[13].main.temp + "F";

  var windEl2 = document.querySelector("#wind2");
  windEl2.textContent = "Wind: " + city.list[13].wind.speed + "mph";

  var humidityEl2 = document.querySelector("#humidity2");
  humidityEl2.textContent = "Humidity: " + city.list[13].main.humidity + "%";

  //DAY 3
  var todayDate3 = document.querySelector("#date3")
  todayDate3.textContent = city.list[21].dt_txt;

  var todayDescEl3 = document.querySelector("#todayDesc3");
  todayDescEl3.textContent = city.list[21].weather[0].description;

  var tempEl3 = document.querySelector("#temp3");
  tempEl3.textContent = "Temp: " + city.list[21].main.temp + "F";

  var windEl3 = document.querySelector("#wind3");
  windEl3.textContent = "Wind: " + city.list[21].wind.speed + "mph";

  var humidityEl3 = document.querySelector("#humidity3");
  humidityEl3.textContent = "Humidity: " + city.list[21].main.humidity + "%";

  //DAY 4
  var todayDate4 = document.querySelector("#date4")
  todayDate4.textContent = city.list[29].dt_txt;

  var todayDescEl4 = document.querySelector("#todayDesc4");
  todayDescEl4.textContent = city.list[29].weather[0].description;

  var tempEl4 = document.querySelector("#temp4");
  tempEl4.textContent = "Temp: " + city.list[29].main.temp + "F";

  var windEl4 = document.querySelector("#wind4");
  windEl4.textContent = "Wind: " + city.list[29].wind.speed + "mph";

  var humidityEl = document.querySelector("#humidity4");
  humidityEl.textContent = "Humidity: " + city.list[29].main.humidity + "%";

  //DAY 5
  var todayDate5 = document.querySelector("#date5")
  todayDate5.textContent = city.list[37].dt_txt;

  var todayDescEl5 = document.querySelector("#todayDesc5");
  todayDescEl5.textContent = city.list[37].weather[0].description;

  var tempEl5 = document.querySelector("#temp5");
  tempEl5.textContent = "Temp: " + city.list[37].main.temp + "F";

  var windEl5 = document.querySelector("#wind5");
  windEl5.textContent = "Wind: " + city.list[37].wind.speed + "mph";

  var humidityEl5 = document.querySelector("#humidity5");
  humidityEl5.textContent = "Humidity: " + city.list[37].main.humidity + "%";

  // var iconTodayEl = document.querySelector("#iconToday");
  // iconTodayEl.textContent = city.list[0].weather[0].icon;
  //icons here https://openweathermap.org/weather-conditions

  //arrays for 3pm- 5, 13, 21, 29, 37
};

//create buttons for searched cities
var createBtnEl = function() {
  cities = JSON.parse(localStorage.getItem("cities")) || [];
  for (var i = 0; i < cities.length; i++) {
    var cityBtnText = cities[i];

//create container for button
    // var btnContEl = document.createElement('div');
    // btnContEl.classList = 'columns';

    var btnColEl = document.createElement('div');
    btnColEl.classList = 'column local-button';
    // btnContEl.appendChild(btnColEl);

  //create button for each name
    var buttonEl = document.createElement('button');
    buttonEl.classList = 'button is-fullwidth cityBtn';
    // buttonEl.type = 'submit';
    buttonEl.innerHTML = cityBtnText;
  
    
    //getCity(cityBtnText);
    //  saveCity(document.getElementById("searchInput").value, 0)
    //  loadCity(); 
    
    btnColEl.appendChild(buttonEl);
    
    
    searchFormEl.appendChild(btnColEl);
    createEventListeners()
    
    buttonEl.addEventListener("click", function(event) {
      event.preventDefault();

      getCity(document.getElementById('createdBtn').innerHTML)
    });
  }
}

// function createEventListeners(){
//   var history= document.getElementsByClassName('local-button')
//   for (i=0; i<history.length;i++){
//     console.log(history[i].innerText)
//     history[i].addEventListener("click", getCity(history[i].innerText) )
//   }
// }


// LOCAL STORAGE
var cities = [];

document.getElementById('searchBtn').addEventListener("click", function(event) {
  event.preventDefault();
  saveCity(document.getElementById("searchInput").value)

});

var loadCity = function() {
  cities = JSON.parse(localStorage.getItem("cities")) || [];

  //for(var i = 0; i < cities.length; i++) {
    
  
    createBtnEl();
  }

//}

var saveCity = function(city) {
  cities.push(city);
  localStorage.setItem("cities", JSON.stringify(cities));
};

loadCity();



// btnContainerEl.addEventListener('submit', formSubmitHandler);
// searchInputEl.addEventListener("submit", formSubmitHandler);
document.getElementById('searchBtn').addEventListener('click', formSubmitHandler);