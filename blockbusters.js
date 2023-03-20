const movies = [
  {
    title: "The Shawshank Redemption",
    releaseDate: 1994,
    rating: 9.2,
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    title: "The Godfather",
    releaseDate: 1972,
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    title: "The Dark Knight",
    releaseDate: 2008,
    rating: 8.5,
    actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"]
  },
  {
    title: "Pulp Fiction",
    releaseDate: 1994,
    rating: 7.8,
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    releaseDate: 2003,
    rating: 8.9,
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
  },
  {
    title: "12 Angry Men",
    releaseDate: 1957,
    rating: 6.2,
    actors: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"]
  }
];

// ------------------------------------------------------------------------------ //
// Opdracht 1a: Log het eerste object in de 'movies' array
console.log(movies[0]);
// Verwacht antwoord:
// {
//     title: "The Shawshank Redemption",
//     releaseDate: 1994,
//     rating: 9.2,
//     actors: [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ]
// }



// Opdracht 1b: Log de titel van het eerste object in de 'movies' array

// Verwacht antwoord:
// The Shawshank Redemption
console.log(movies[0].title);

// ------------------------------------------------------------------------------ //
// Opdracht 2a: Log de hoeveel films er in de 'movies' array staan (de lengte van de array). Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken. Je mag dus niet zelf tellen!
const lengthMovies = movies.length
console.log(lengthMovies);
// Verwacht antwoord:
// 6



// Opdracht 2b: Log het indexnummer van de laatste film in de 'movies' array. Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken!
const lastIndexOfMovies = movies.length - 1;
console.log(lastIndexOfMovies);
// Verwacht antwoord:
// 5



// Opdracht 2c: Log het laatste object in de 'movies' array. Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken!
// Tip: maak gebruik van de code die je in de vorige opdracht hebt gemaakt.
console.log(movies[lastIndexOfMovies]);

// Verwacht antwoord:
// {
//     title: '12 Angry Men',
//     releaseDate: 1957,
//     rating: 6.2,
//     actors: [ 'Henry Fonda', 'Lee J. Cobb', 'Martin Balsam' ]
// }



// ------------------------------------------------------------------------------ //
// Opdracht 3a: Log de lijst van acteurs uit van de film "Pulp Fiction" uit de 'movies' array.

// Verwachte antwoord:
// ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]

console.log(movies[3].actors);

// Opdracht 3b: Log de tweede acteur van de film "The Shawshank Redemption". Tip: je spreekt dus eerst de array, daarna het object en vervolgens weer een array aan.

// Verwacht antwoord:
// Morgan Freeman

console.log(movies[0].actors[1]);


// Opdracht 3c: Log de laatste acteur van de laatste film in 'movies' array. Let op: wanneer de array langer of korter wordt, of wanneer er meer of minder acteurs in dit rijtje staan, moet dit nog steeds werken!
// Tip: gebruik hiervoor o.a. jouw code uit 2b voor.
const lastOfActors = movies[lastIndexOfMovies].actors.length -1;
console.log(movies[lastIndexOfMovies].actors[lastOfActors]);

// Verwacht antwoord:
// Martin Balsam



// ------------------------------------------------------------------------------ //
// Opdracht 4a: Maak een if-else-statement die het woord 'Uitstekende film!!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Goede film!' logt, wanneer deze lager is.
// Zorg dat je de onderstaande variabele gebruikt en pas eventueel het entry-nummer aan,
// om te kijken of je algoritme ook werkt wanneer je een andere film selecteert!

const selectedMovie = movies[3];

if (selectedMovie.rating > 8) {
  console.log("Uitstekende film!");
} else {
  console.log("Goede film!");
}

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!



// Opdracht 4b: Maak een if-else-if-else-statement die het woord 'Topper!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Kijktip!' logt, wanneer deze een 8 of lager is,
// maar wel hoger dan een 6 en een 'Matige film' logt bij een lager cijfer dan 6.
// Gebruik weer de variabele uit de vorige opdracht.
// Tip: gebruik de && selector als het getal binnen twee condities moet vallen
console.log('Opdracht 4b:');
if (selectedMovie.rating > 8) {
  console.log("Uitstekende film!");
} else if (selectedMovie.rating <= 8 && selectedMovie.rating > 6.5) {
  console.log("Goede film!");
}
  else {
  console.log("Matige film!");
}


// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

// Verwacht antwoord bij 'const selectedMovie = movies[5]':
// Matige film

