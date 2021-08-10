var selectEl = document.querySelector("#characterSelect");
var publicKey = "c1847813d0c19807d9ed43f48afc4f36";

// Establish all of the required elements on the page as variables to be manipulated later
// var summaryTitleEl = document.querySelector("#summaryTitle");
var nameEl = document.querySelector("#charName");
var comicCountEl = document.querySelector("#charComicCount");
var storyCountEl = document.querySelector("#charStoryCount");
var marvelWikiEl = document.querySelector("#charWikiUrl");
var charPageLinkEl = document.querySelector("#characterPageUrl");
var thumbnailEl = document.querySelector("#characterThumbnail");

window.onload = setData;

function setData(){
      var savedCurrentCharacter = localStorage.getItem("currentCharacter");
      console.log("Local Storage Data: " + savedCurrentCharacter);
      selectEl.value = savedCurrentCharacter;
      setCharacterData();
}



//imdb API

var movieList = document.getElementById("movie-list");
var fetchButton = document.getElementById("movie-button");

function imdbApi(character) {
  var requestUrl = "https://imdb-api.com/en/API/SearchMovie/k_raxvufjs/" + character;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
          console.log(data)
          movieList.textContent = ""
      for (var i = 0; i < data.results.length; i++) {
        var displayList = document.createElement("li");
        console.log(data.results[i].title);
        displayList.textContent = data.results[i].title;
        movieList.appendChild(displayList);
      }
    });
}

// fetchButton.addEventListener("click", imdbApi);

// end of imdb API

// Marvel API Start

function setCharacterData(){
      // Get the value of the dropdown select box and store it in characterName
      var characterName = selectEl.value;
      currentCharacter = characterName;
      storeCurrentCharacter(currentCharacter);
      imdbApi(characterName);
      var altName="";
      // Set the api URL based on the selected character 
      var lowerCasedChar = characterName.toLowerCase();
      if(characterName == "Spider-Man"){
            nameEl.textContent = characterName;
            // summaryTitleEl.textContent = characterName;
            altName = "Spider-Man (Peter Parker)";
            characterName = ""
            var lowerCasedChar = "spider-man"
      }else if(characterName == "Captain America"){
            nameEl.textContent = characterName;
            // summaryTitleEl.textContent = characterName;
            altName = "Captain America";
            characterName = ""
            var lowerCasedChar = "captain-america"
      } 
      else if(characterName == "Iron-Man"){
            nameEl.textContent = characterName;
            // summaryTitleEl.textContent = characterName;
            altName = "Iron Man";
            characterName = ""
            var lowerCasedChar = "iron-man"
      } 
      var baseURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + characterName + altName + "&apikey=" + publicKey;
      // Set header of info cards to the name of the selected character + summary
      // summaryTitleEl.textContent = characterName + " Summary";
      // Fetch statement to get the character ID and base data
      fetch(baseURL)
      .then(function(response){
            return response.json();
      })
      .then(function(characterData){
            console.log(characterData);
            var charId = characterData.data.results[0].id;
            var comicCount = characterData.data.results[0].comics.available;
            var storyCount = characterData.data.results[0].stories.available;
            // Get link to official marvel wiki for selected character
            var charWikiUrl = characterData.data.results[0].urls[1].url;
            // Get the path to the thumbnail for selected character
            var thumbPath = characterData.data.results[0].thumbnail.path;
            // Get the extension of the thumbnail for selected character
            var thumbExt = characterData.data.results[0].thumbnail.extension;
            // Combine the path & extension of thumbnail to get it's actual URL 
            var thumbUrl = thumbPath + "." + thumbExt;

            if (characterName != ""){
            nameEl.textContent = characterName;
            }
            thumbnailEl.src = thumbUrl;
            comicCountEl.textContent = comicCount;
            storyCountEl.textContent = storyCount;
            marvelWikiEl.href = charWikiUrl;
            marvelWikiEl.textContent = characterName + " Wiki";
            console.log(lowerCasedChar);
            console.log(charPageLinkEl);
            charPageLinkEl.href= "./characters/" + lowerCasedChar + ".html";
            console.log(charId);
      })
}
// Marvel API End

function storeCurrentCharacter(character){
      localStorage.setItem("currentCharacter", currentCharacter);
}