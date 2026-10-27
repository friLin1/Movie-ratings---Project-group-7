// The movie information comes from our CSV dataset.
var movies = [
  {
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "year": "1994",
    "rating": "9.3"
  },
  {
    "title": "The Godfather",
    "genre": "Crime/Drama",
    "year": "1972",
    "rating": "9.2"
  },
  {
    "title": "The Dark Knight",
    "genre": "Action/Crime",
    "year": "2008",
    "rating": "9"
  },
  {
    "title": "Pulp Fiction",
    "genre": "Crime/Drama",
    "year": "1994",
    "rating": "8.9"
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "genre": "Fantasy/Adventure",
    "year": "2003",
    "rating": "9"
  },
  {
    "title": "Schindler's List",
    "genre": "Biography/Drama",
    "year": "1993",
    "rating": "9"
  },
  {
    "title": "12 Angry Men",
    "genre": "Drama",
    "year": "1957",
    "rating": "9"
  },
  {
    "title": "Inception",
    "genre": "Sci-Fi/Action",
    "year": "2010",
    "rating": "8.8"
  },
  {
    "title": "Fight Club",
    "genre": "Drama",
    "year": "1999",
    "rating": "8.8"
  },
  {
    "title": "Forrest Gump",
    "genre": "Drama/Romance",
    "year": "1994",
    "rating": "8.8"
  },
  {
    "title": "The Matrix",
    "genre": "Sci-Fi/Action",
    "year": "1999",
    "rating": "8.7"
  },
  {
    "title": "Goodfellas",
    "genre": "Crime/Drama",
    "year": "1990",
    "rating": "8.7"
  },
  {
    "title": "Star Wars: Episode IV - A New Hope",
    "genre": "Sci-Fi/Adventure",
    "year": "1977",
    "rating": "8.6"
  },
  {
    "title": "The Silence of the Lambs",
    "genre": "Thriller/Crime",
    "year": "1991",
    "rating": "8.6"
  },
  {
    "title": "Se7en",
    "genre": "Crime/Thriller",
    "year": "1995",
    "rating": "8.6"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "genre": "Fantasy/Adventure",
    "year": "2001",
    "rating": "8.8"
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "genre": "Sci-Fi/Adventure",
    "year": "1980",
    "rating": "8.7"
  },
  {
    "title": "The Lion King",
    "genre": "Animation/Drama",
    "year": "1994",
    "rating": "8.5"
  },
  {
    "title": "Back to the Future",
    "genre": "Sci-Fi/Comedy",
    "year": "1985",
    "rating": "8.5"
  },
  {
    "title": "Terminator 2: Judgment Day",
    "genre": "Action/Sci-Fi",
    "year": "1991",
    "rating": "8.6"
  },
  {
    "title": "The Avengers",
    "genre": "Action/Adventure",
    "year": "2012",
    "rating": "8"
  },
  {
    "title": "Interstellar",
    "genre": "Sci-Fi/Drama",
    "year": "2014",
    "rating": "8.7"
  },
  {
    "title": "Django Unchained",
    "genre": "Western/Drama",
    "year": "2012",
    "rating": "8.5"
  },
  {
    "title": "Whiplash",
    "genre": "Drama/Music",
    "year": "2014",
    "rating": "8.5"
  },
  {
    "title": "Spider-Man: No Way Home",
    "genre": "Action/Adventure",
    "year": "2021",
    "rating": "8.2"
  },
  {
    "title": "1917",
    "genre": "War/Drama",
    "year": "2019",
    "rating": "8.2"
  },
  {
    "title": "Joker",
    "genre": "Crime/Drama",
    "year": "2019",
    "rating": "8.3"
  },
  {
    "title": "Avengers: Endgame",
    "genre": "Action/Adventure",
    "year": "2019",
    "rating": "8.4"
  },
  {
    "title": "Tenet",
    "genre": "Action/Sci-Fi",
    "year": "2020",
    "rating": "7.3"
  },
  {
    "title": "The Departed",
    "genre": "Crime/Thriller",
    "year": "2006",
    "rating": "8.5"
  },
  {
    "title": "Gladiator",
    "genre": "Action/Drama",
    "year": "2000",
    "rating": "8.5"
  },
  {
    "title": "Avatar",
    "genre": "Sci-Fi/Adventure",
    "year": "2009",
    "rating": "7.9"
  },
  {
    "title": "Up",
    "genre": "Animation/Adventure",
    "year": "2009",
    "rating": "8.3"
  },
  {
    "title": "WALL-E",
    "genre": "Animation/Sci-Fi",
    "year": "2008",
    "rating": "8.4"
  },
  {
    "title": "Alien",
    "genre": "Sci-Fi/Horror",
    "year": "1979",
    "rating": "8.5"
  },
  {
    "title": "Titanic",
    "genre": "Romance/Drama",
    "year": "1997",
    "rating": "7.9"
  },
  {
    "title": "Gone with the Wind",
    "genre": "Romance/Drama",
    "year": "1939",
    "rating": "8.2"
  },
  {
    "title": "The Wizard of Oz",
    "genre": "Fantasy/Musical",
    "year": "1939",
    "rating": "8.1"
  },
  {
    "title": "The Godfather Part II",
    "genre": "Crime/Drama",
    "year": "1974",
    "rating": "9"
  },
  {
    "title": "Mad Max: Fury Road",
    "genre": "Action/Sci-Fi",
    "year": "2015",
    "rating": "8.1"
  },
  {
    "title": "Jurassic Park",
    "genre": "Adventure/Sci-Fi",
    "year": "1993",
    "rating": "8.2"
  },
  {
    "title": "The Big Lebowski",
    "genre": "Comedy/Crime",
    "year": "1998",
    "rating": "8.1"
  },
  {
    "title": "Memento",
    "genre": "Mystery/Thriller",
    "year": "2000",
    "rating": "8.4"
  },
  {
    "title": "The Dark Knight Rises",
    "genre": "Action/Crime",
    "year": "2012",
    "rating": "8.4"
  },
  {
    "title": "Avengers: Infinity War",
    "genre": "Action/Adventure",
    "year": "2018",
    "rating": "8.4"
  },
  {
    "title": "Casablanca",
    "genre": "Romance/Drama",
    "year": "1942",
    "rating": "8.5"
  },
  {
    "title": "Inside Out",
    "genre": "Animation/Comedy",
    "year": "2015",
    "rating": "8.1"
  },
  {
    "title": "American Beauty",
    "genre": "Drama",
    "year": "1999",
    "rating": "8.3"
  },
  {
    "title": "La La Land",
    "genre": "Musical/Romance",
    "year": "2016",
    "rating": "8"
  },
  {
    "title": "John Wick",
    "genre": "Action/Thriller",
    "year": "2014",
    "rating": "7.4"
  }
];

function searchMovies() {
  var word = document.getElementById("search").value.toLowerCase();
  var matches = [];
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].title.toLowerCase().includes(word) || movies[i].genre.toLowerCase().includes(word)) {
      matches.push(movies[i]);
    }
  }
  displayMovies(matches);
}

function showAll() {
  document.getElementById("search").value = "";
  displayMovies(movies);
}

function displayMovies(list) {
  var result = document.getElementById("results");
  result.innerHTML = "";
  document.getElementById("count").textContent = list.length + " movie(s) found";
  for (var i = 0; i < list.length; i++) {
    var p = document.createElement("p");
    p.textContent = list[i].title + " (" + list[i].year + ") - " + list[i].genre + " - Rating: " + list[i].rating;
    result.appendChild(p);
  }
}

showAll();
