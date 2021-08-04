var publicKey = "c1847813d0c19807d9ed43f48afc4f36";
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
var baseURL =
"https://gateway.marvel.com:443/v1/public/characters?name=" + "Wolverine" + "&limit=50" + "&apikey=" + publicKey;
var comicURL = "https://gateway.marvel.com:443/v1/public/comics?characters=1009718&orderBy=-onsaleDate&apikey=" + publicKey
var comicListEl = document.querySelector("#comicList");
fetch(baseURL)
.then(function(response){
      return response.json();
})
.then(function(data){
      console.log(data);
      var comics = data.data.results[0].comics.items;
      // for(comic in comics){
      //       var newComic = document.createElement("li");
      //       var comicName = comics[comic].name;
      //       var content = `Comic: ${comicName}`
      //       newComic.innerHTML = content;
      //       comicListEl.appendChild(newComic);
      // }
})
fetch(comicURL)
.then(function(response){
      return response.json();
})
.then(function(data){
      console.log(data);
      var comics = data.data.results
      for(comic in comics){
            var title = data.data.results[comic].title;
            var newComic = document.createElement("li");
            var thumbnail = data.data.results[comic].thumbnail.path;
            var thumbnailExt = data.data.results[comic].thumbnail.extension;
            var comicDescription = data.data.results[comic].description;
            console.log(comicDescription);
            if(!comicDescription){
                  comicDescription = "No description available";
            }
            var content = `<image src="${thumbnail}.${thumbnailExt}" style="max-width: 25%"><br>Title: ${title}`
            var cardContent = `  <div class="row">
            <div class="col s10 m6">
            <div class="card">
            <div class="card-image">
            <img src="${thumbnail}.${thumbnailExt}" class="circle" width="10vw">
            <span class="card-title">${title}</span>
            </div>
            <div class="card-content">
            <p>${comicDescription}</p>
            </div>
            <div class="card-action">
            <a href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=${title}&_sacat=0">Find it on Ebay</a>
            </div>
            </div>
            </div>
            </div>`
            newComic.innerHTML = cardContent;
            comicListEl.appendChild(newComic);
      }
      
})