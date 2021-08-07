//imdb API

var movieList = document.getElementById("movie-list");
var fetchButton = document.getElementById("movie-button");

function imdbApi() {
  var requestUrl = "https://imdb-api.com/en/API/SearchMovie/k_raxvufjs/thor";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.results.length; i++) {
        var displayList = document.createElement("p");
        console.log(data.results[i].title);
        displayList.textContent = data.results[i].title;
        movieList.appendChild(displayList);
      }
    });
}

fetchButton.addEventListener("click", imdbApi);

// end of imdb API
