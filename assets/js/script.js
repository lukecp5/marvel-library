var publicKey = "c1847813d0c19807d9ed43f48afc4f36";
var ts = Date.now();
marvelAPIUrl2 = "https://gateway.marvel.com:443/v1/public/characters?ts="+ ts + "&apikey=" + publicKey;

fetch(marvelAPIUrl2)
.then(function (response) {
  return response.json();
})
.then(function(data){
console.log(data);

})
