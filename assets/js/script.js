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
  "Wolverine": 1009718,
  "Captain America": "1009220",
  "Thanos": 1009652,
  "Iron Man": 1009368,
  "Hulk": 1009351,
  "Daredevil": 1009262,
  "Magneto": 1009417,
  "Thor": 1009664,
};
for (char in characters) {
  var baseURL =
    "https://gateway.marvel.com:443/v1/public/characters?name=" +
    characters[char] +
    "&apikey=" +
    publicKey;
  fetch(baseURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(characterID)
      console.log(data.data.results[0].name + " : " + data.data.results[0].id);
      var result = data.data.results[0];
      var name = result.name
      var charID = result.id;
      fetch("https://gateway.marvel.com:443/v1/public/characters/" + charID + "/comics?apikey=c1847813d0c19807d9ed43f48afc4f36")
      .then(function(response){
        return response.json();
      })
      .then(function (data){
        // var comicList = document.createElement("ul");
        // comicList.classList("list")
        console.log(data);
        // for(i in data.data.results){
        //   document.createElement("h1");
        //   document.createElement("li")
        // }
      })
    });
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

console.log(hash.toString());
// console.log(ts);
// marvelAPIUrl = "https://gateway.marvel.com:443/v1/public/characters?apikey=" + publicKey;
var privateKey = "85ab682cd5afb746ba6fa8f9a085b82a62c59778";
var ts = Date.now();
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
