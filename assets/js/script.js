$(document).ready(function () {
  $("select").formSelect();
});

var publicKey = "c1847813d0c19807d9ed43f48afc4f36";
var characters = [
  "Hulk",
  "Captain America",
  "Iron Man",
  "Thanos",
  "Wolverine",
  "Magneto",
  "Daredevil",
  "Deadpool",
  "Thor",
];
var charIds = {
  Wolverine: 1009718,
  "Captain America": "1009220",
  Thanos: 1009652,
  "Iron Man": 1009368,
  Hulk: 1009351,
  Daredevil: 1009262,
  Magneto: 1009417,
  Thor: 1009664,
};

var ts = Date.now();
for (char in characters) {
  // Base URL that we insert each characters name into to get their ID and Marvel Name
  var baseURL =
    "https://gateway.marvel.com:443/v1/public/characters?name=" +
    characters[char] +
    "&apikey=" +
    publicKey;

  // Create a fetch function to gather the character ID's
  fetch(baseURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(characterID)

      // This is nested inside the original fetch function so that it is called on each item returned by the first fetch statement. Assigns the character name and ID to variables for use when searching for their comics
      console.log(data.data.results[0].name + " : " + data.data.results[0].id);

      // Save the path to the useful data in the "result" variable so that we don't have to type out data.data.results[0] every time we want to use the information
      var result = data.data.results[0];
      var name = result.name;
      var charID = result.id;

      //The API call to the comics lists. The character ID is inserted to single out the character, and return a list of that characters comics. By default the limit is 20 results
      fetch(
        "https://gateway.marvel.com:443/v1/public/characters/" +
          charID +
          "/comics?apikey=c1847813d0c19807d9ed43f48afc4f36"
      )
        .then(function (response) {
          return response.json();
        })
        // The data in this fetch() function is returning the JSON version of the comics for the character
        .then(function (data) {
          console.log(data);
          // Here I began creating the HTML elements for each comic book returned for each character
          // var comicList = document.createElement("ul");
          // comicList.classList("list")
          // for(i in data.data.results){
          //   document.createElement("h1");
          //   document.createElement("li")
          // }
        });
    });

  // The cards generated for each character
  var container = document.querySelector("#charCardHolder");
  var newChar = document.createElement("div");
  newChar.classList = "col s12 m3";
  var content = `
  <div class="card">
  <div class="card-image">
  <img src="https://materializecss.com/images/sample-1.jpg">
  <span class="card-title">${characters[char]}</span>
  </div>
  <div class="card-content">
  <p>${characters[char]} Description from marvel API</p>
  </div>
  <div class="card-action">
  <a href="#">Check out ${characters[char]}'s wiki!</a>
  </div>
  </div>
  </div>`;
  newChar.innerHTML = content;
  container.appendChild(newChar);
}
// Private key is not needed for API calls, use the public key
var privateKey = "85ab682cd5afb746ba6fa8f9a085b82a62c59778";
marvelAPIUrl2 =
  "https://gateway.marvel.com:443/v1/public/characters?ts=" +
  ts +
  "&apikey=" +
  publicKey;
// fetch(marvelAPIUrl2)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
var baseURL =
  "https://gateway.marvel.com:443/v1/public/characters?name=" +
  char +
  "&apikey=" +
  publicKey;
