

var apiKey = "a732740e9afd7858896a61e89013252f";
//5 day search by city
var cityFiveDay = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=imperial';

// current weather by city
var cityCurrent = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial';

//Variables from module 6. Replace classes and reconfigure to the city name button
var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

//CODE FROM MODULE 6. SEARCH INPUT creates a div and pulls info from API//
//need to refigure, to display search info in the cards, and create a 
//button with the city name that will be stored and clickable


// search bar input
var formSubmitHandler = function(event) {
    event.preventDefault();
  //gets value from nameInputEl
    var username = nameInputEl.value.trim();
  
      if (username) {
        getUserRepos(username);
  //clears the form after search
        nameInputEl.value = "";
      } else {
        alert("Pleae enter a gitHub username");
      }
    console.log(event);
  };
  
  
  //function to fetch from API
  var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    
    fetch(apiUrl).then(function(response) {
        console.log(response);
          response.json().then(function(data) { 
  //when response data is converted to JSON, it gets sent from getUserRepos to displayRepos
              displayRepos(data, user);
              console.log(data);
            });
      });
  }; 
  
  //accepts the array of repository data, and the term we searched for as parameters
  var displayRepos = function(repos, searchTerm) {
  //clear old content from repos display
  repoContainerEl.textContent = "";
  repoSearchTerm.textContent = searchTerm;
    console.log(repos);
    console.log(searchTerm);
  
  //loop over repos
  for (var i = 0; i < repos.length; i++) {
  //format repo name
  var repoName = repos[i].owner.login + "/" + repos[i].name;
  //create a container for each repo
  var repoEl = document.createElement("div");
  repoEl.classList = "list-item flex-row justify-space-between align-center";
  //create a span element to hold repo name
  var titleEl = document.createElement("span");
  titleEl.textContent = repoName;
  //append to container repoEl
  repoEl.appendChild(titleEl);
  
  // create a status element
  var statusEl = document.createElement("span");
  statusEl.classList = "flex-row align-center";
  
  // check if current repo has issues or not
  if (repos[i].open_issues_count > 0) {
    statusEl.innerHTML =
      "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
  } else {
    statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
  }
  // append to container repoEl
  repoEl.appendChild(statusEl);
  //append container to the dom
  repoContainerEl.appendChild(repoEl);
  }
  //end for loop
  };
  
  
  
  userFormEl.addEventListener("submit", formSubmitHandler);
//END CODE FROM MODULE 6, lesson 6.2