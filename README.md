# Marvel Library

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://github.com/lukecp5/marvel-library/blob/main/assets/images/marvel-library-logo.png?raw=true" alt="Logo">

  <h3 align="center">An Awesome Marvel Library!</h3>

  <p align="center">
<!--     <br />
    <a href="https://github.com/lukecp5/marvel-library"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://lukecp5.github.io/marvel-library/">View Demo</a>
    ·
    <a href="https://github.com/lukecp5/marvel-library/issues">Report Bug</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#user-story">User Story</a></li>
        <li><a href="#tasks">Tasks</a></li>
      </ul>
    </li>
    <li><a href="#mvp-features">MVP Features</a></li>
    <li><a href="#future-features">Future Features</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#links">Links</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Screenshot of deployed application](https://github.com/lukecp5/marvel-library/blob/main/assets/images/screenshot.png?raw=true)

Hi, we are team Marvel Library (Luke Poirrier, Colin Etchenm, James Li, Ehsan Khosravi). We all came from different backgrounds to create a project for fans of Marvel. We came together to form a team for our first project. We all learned a lot throughout the process, especially how to work on a team with other developers. We decided to build an application that allows the user to find out more about their favorite characters. 

Motivation for development:

- We would like to offer a application for people who would like to know and learn about each marvel character.

### Built With
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Materialize](https://materializecss.com/)
- [JQuery](https://jquery.com)
- [Marvel API](https://developer.marvel.com/)
  ```sh
   https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-Man&orderBy=name&apikey=c1847813d0c19807d9ed43f48afc4f36
   https://gateway.marvel.com:443/v1/public/comics?format=comic&titleStartsWith=spider&apikey=c1847813d0c19807d9ed43f48afc4f36
  ```
- [imdb API](https://imdb-api.com/)
  ```sh
   https://imdb-api.com/en/API/SearchMovie/k_raxvufjs/
  ```

<!-- GETTING STARTED -->

## Getting Started

### User Story

- AS A Comic Book Reader
- I WANT TO find more information about my favorite characters
- SO THAT I can learn about their history, their powers, and other information about them

### Tasks

1. Build out the frame of the user interface(header, containers, script imports, style imports, etc.)
2. Get a list of marvel characters and make an array containing them(10+)
3. Use JavaScript on the main page to gather data from the Marvel and IMDB APIs about the character's movies, thumbnail, and statistics when selected from the dropdown menu
4. Build a click handler for the button below character stats, so that when the user clicks it, they are taken to that specific characters page
5. Add a link to the characters wiki when clicked
6. Create a template and use the Marvel data to populate the data for the selected character when a user navigates to the character page
7. On the character page, dynamically generate cards for randomly selected comics from the character with a description, title, and link to buy it on Ebay

<!-- MVP Features -->
## MVP Features

- Thumbnail of character
- Description of character(From Marvel or Wikipedia)
- Characters origin year
- List of comics including character
- Find each comic on Ebay
- Link to the Wikipedia page for the character
- Link to the Marvel Wiki page for the character
<!-- Possible/Future features -->

## Future Features

- See accompanying heroes from the characters stories
- Click on comic to search for it on Ebay
- Search OMDB for movies involving character
- Populate random character every time you load the app
- Add less known characters for people to learn about
- Find youtube videos involving the character
- Theme based on favorite characters
- Have a list of your favorite characters

<!-- CONTRIBUTING -->

## Contributors

<a href = "https://github.com/marvel-library/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=lukecp5/marvel-library"/>
</a>
<!-- LICENSE -->

- [Luke Poirrier](https://github.com/lukecp5)
- [Colin Etchen](https://github.com/ColinEtchen)
- [James Li](https://github.com/jamesgli520)
- [Ehsan Khosravi](https://github.com/ekhosr)

## Links

- [Project Link](https://github.com/lukecp5/marvel-library)
- [Deployed Application](https://lukecp5.github.io/marvel-library/)
- [Project Presentation](https://docs.google.com/presentation/d/1oKPOn8cHUJo5kUJcxkRl0xatjMRL9nJlkxaoJtiMy0Q/edit?usp=sharing)
