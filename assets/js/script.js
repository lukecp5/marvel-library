var characters = [
  "Spider-Man",
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
for (char in characters) {
  var container = document.querySelector("#charCardHolder");
  var newChar = document.createElement("div")
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
