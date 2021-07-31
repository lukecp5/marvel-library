# Marvel Library

## User Story
_____
### AS A Comic Book Reader
### I WANT TO find more information about my favorite characters
### SO THAT I can learn about their history, their powers, and other information about them 

## APIs
https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-Man&orderBy=name&apikey=c1847813d0c19807d9ed43f48afc4f36
https://gateway.marvel.com:443/v1/public/comics?format=comic&titleStartsWith=spider&apikey=c1847813d0c19807d9ed43f48afc4f36

## Tasks
1. Build out the frame of the user interface(header, containers, script imports, style imports, etc.)
2. Get a list of marvel characters and make an array containing them(10+)
3. Design a system with JS that creates cards/list items for a list of preselected marvel characters
4. Build the click handlers for the cards, so that when the user clicks a character, their information and comics are displayed for the user 
5. Add a link to the characters wiki when clicked
6. Add a button to the character page to take the user back to the main menu

## MVP Features
- Thumbnail of character
- Description of character(From Marvel or Wikipedia)
- Characters origin year
- List of comics including character
- Link to the Wiki for the character
- See a list of stories the character is involved in

### Possible/Future features
- See accompanying heroes from the characters stories
- Click on comic to search for it on Ebay
- Search OMDB for movies involving character
- Populate random character every time you load the app
- Add less known characters for people to learn about

#### Dream Features
- Find youtube videos involving the character
- Theme based on favorite characters 
- Have a list of your favorite characters 
