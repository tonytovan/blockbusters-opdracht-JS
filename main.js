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

// @todo dit zetten we dan in de readme, niet hierzeuw
// Aandachtspunten
// - Een array start altijd bij 0
// - Een array heeft een length property
// - Een array spreek je aan met de blokhaak annotatie
// - Een object spreek je aan met de punt annotatie
// - Je kunt het aanspreken van een array met daarbinnen een object combineren (en visa versa)


// ------------------------------------------------------------------------------ //
// Opdracht 1a: Log het eerste object in de 'movies' array

// Verwachte antwoord:
// {
//     title: "The Shawshank Redemption",
//     releaseDate: 1994,
//     rating: 9.2,
//     actors: [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ]
// }

console.log('Opdracht 1a:');
console.log(movies[0]);

// Opdracht 1b: Log de titel van het eerste object in de 'movies' array

// Verwachte antwoord:
// The Shawshank Redemption

console.log('Opdracht 1b:');
console.log(movies[0].title);

// ------------------------------------------------------------------------------ //
// Opdracht 2a: Log de hoeveel films er in de 'movies' array staan (de lengte van de array). Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken. Je mag dus niet zelf tellen!

// Verwachte antwoord:
// 6

console.log('Opdracht 2a:');
console.log(movies.length);

// Opdracht 2b: Log het indexnummer van de laatste film in de 'movies' array. Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken!

// Verwacht antwoord:
// 5

console.log('Opdracht 2b:');
const lastIndexOfMovies = movies.length - 1;
console.log(lastIndexOfMovies);

// Opdracht 2c: Log het laatste object in de 'movies' array. Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken!
// Tip: maak gebruik van de code die je in de vorige opdracht hebt gemaakt.

// Verwacht antwoord:
// {
//     title: '12 Angry Men',
//     releaseDate: 1957,
//     rating: 6.2,
//     actors: [ 'Henry Fonda', 'Lee J. Cobb', 'Martin Balsam' ]
// }

console.log('Opdracht 2c:');
console.log(movies[lastIndexOfMovies]);

// ------------------------------------------------------------------------------ //
// Opdracht 3a: Log de lijst van acteurs uit van de film "Pulp Fiction" uit de 'movies' array.

// Verwachte antwoord:
// ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]

console.log('Opdracht 3a:');
console.log(movies[3].actors);

// Opdracht 3b: Log de tweede acteur van de film "The Shawshank Redemption". Tip: je spreekt dus eerst de array, daarna het object en vervolgens weer een array aan.

// Verwachte antwoord:
// Morgan Freeman

console.log('Opdracht 3b:');
console.log(movies[0].actors[1]);

// Opdracht 3c: Log de laatste acteur van de laatste film in 'movies' array. Let op: wanneer de array langer of korter wordt, of wanneer er meer of minder acteurs in dit rijtje staan, moet dit nog steeds werken!
// Tip: gebruik hiervoor o.a. jouw code uit 2b voor.

// Verwachte antwoord:
// Martin Balsam

console.log('Opdracht 3c:');
const lastIndexOfActors = movies[lastIndexOfMovies].actors.length - 1;
console.log(movies[lastIndexOfMovies].actors[lastIndexOfActors]);


// ------------------------------------------------------------------------------ //
// Opdracht 4a: Maak een if-else-statement die het woord 'Uitstekende film!!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Goede film!' logt, wanneer deze lager is.
// Zorg dat je de onderstaande variabele gebruikt en pas eventueel het entry-nummer aan,
// om te kijken of je algoritme ook werkt wanneer je een andere film selecteert!

const selectedMovie = movies[0];

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

console.log('Opdracht 4a:');
if (selectedMovie.rating > 8) {
  console.log('Uitstekende film!!');
} else {
  console.log('Goede film!');
}

// Opdracht 4b: Maak een if-else-if-else-statement die het woord 'Topper!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Kijktip!' logt, wanneer deze een 8 of lager is,
// maar wel hoger dan een 6 en een 'Matige film' logt bij een lager cijfer dan 6.
// Gebruik weer de variabele uit de vorige opdracht.
// Tip: gebruik de && selector als het getal binnen twee condities moet vallen

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

// Verwacht antwoord bij 'const selectedMovie = movies[5]':
// Matige film

console.log('Opdracht 4b:');
if (selectedMovie.rating > 8) {
  console.log('Uitstekende film!!');
} else if (selectedMovie.rating <= 8 && selectedMovie.rating > 6.5) {
  console.log('Goede film!');
} else {
  console.log('Matige film');
}

// ------------------------------------------------------------------------------ //
// Opdracht 5a: Log met behulp van de for-loop elk object binnen de array

// Verwachte antwoord:
// {
//     title: 'The Shawshank Redemption',
//     releaseDate: 1994,
//     rating: 9.2,
//     actors: [ 'Tim Robbins', 'Morgan Freeman', 'Bob Gunton' ]
// }
// {
//     title: 'The Godfather',
//     releaseDate: 1972,
//     rating: 9.2,
//     actors: [ 'Marlon Brando', 'Al Pacino', 'James Caan' ]
// }
// Enzovoorts...

console.log('Opdracht 5a:')
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i])
}

// @todo ik wil deze opdrachtjes 100% gebruiken, maar in het hoofdstuk waar deze opdracht staat komt loops pas later! Dus die kan hier nog niet in.

// Opdracht 5b: Log met behulp van de for-loop elk film titel binnen de array

// Verwachte antwoord:
// The Shawshank Redemption
// The Godfather
// The Dark Knight
// Pulp Fiction
// The Lord of the Rings: The Return of the King
// 12 Angry Men

console.log('Opdracht 5b:')
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title)
}


// Opdracht 5c: Log met behulp van de for-loop elk laatste acteur van elke film
// Tip: maak weer gebruik van een eerder gecreëerde variabele

console.log('Opdracht 5c:')
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].actors[lastIndexOfActors])
}

// ------------------------------------------------------------------------------ //
// Opdracht 6: Herschrijf opdracht 4b, zodat deze nu binnen een for-loop
// voor elke film checkt wat het cijfer is en dit voor alle films logt
// Tip: Je maakt hier dus GEEN gebruik meer van de variabele selectedMovie

// Verwachte antwoord:
// Uitstekende film!!
// Uitstekende film!!
// Uitstekende film!!
// Goede film!
// Uitstekende film!!
// Matige film

console.log('Opdracht 6:')
for (let i = 0; i < movies.length; i++) {
  if (movies[i].rating > 8) {
    console.log('Uitstekende film!!')
  } else if (movies[i].rating <= 8 && movies[i].rating > 6.5) {
    console.log('Goede film!')
  } else {
    console.log('Matige film')
  }
}
