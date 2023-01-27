const movies = [
    {
        title: "The Shawshank Redemption",
        releaseDate: 1994,
        rating: 9.2,
        actors: [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ]
    },
    {
        title: "The Godfather",
        releaseDate: 1972,
        rating: 9.2,
        actors: [ "Marlon Brando", "Al Pacino", "James Caan" ]
    },
    {
        title: "The Dark Knight",
        releaseDate: 2008,
        rating: 8.5,
        actors: [ "Christian Bale", "Heath Ledger", "Gary Oldman" ]
    },
    {
        title: "Pulp Fiction",
        releaseDate: 1994,
        rating: 7.8,
        actors: [ "John Travolta", "Samuel L. Jackson", "Uma Thurman" ]
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        releaseDate: 2003,
        rating: 8.9,
        actors: [ "Elijah Wood", "Ian McKellen", "Viggo Mortensen" ]
    },
    {
        title: "12 Angry Men",
        releaseDate: 1957,
        rating: 6.2,
        actors: [ "Henry Fonda", "Lee J. Cobb", "Martin Balsam" ]
    }
];

// Aandachtspunten:
// - Een array start altijd bij 0
// - Een array heeft een length methode
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

console.log( movies[0] )

// Opdracht 1b: Log de titel van het eerste object in de 'movies' array
// Tip: we gaan nu het aanspreken van een array en een object combineren

// Verwachte antwoord:
// The Shawshank Redemption

console.log( movies[0].title )

// ------------------------------------------------------------------------------ //
// Opdracht 2a: Log de hoeveelheid entries (de lengte) van de 'movies' array.
// Zorg dat het ook werkt als er meer films worden toegevoegd aan de array

// Verwachte antwoord:
// 6
console.log( movies.length )

// Opdracht 2b: Log het getal dat je nodig hebt om de laatste plek in de 'movies' array aan te spreken.
// Zorg dat het ook werkt als er meer films worden toegevoegd aan de array
// Tip: Houd er hierbij rekening mee dat een array altijd start bij het getal 0
// Tip: maak eerst een variabele aan, waar je de lengte in opslaat,
// pas deze waarde aan zodat je altijd de laatste plek in de array terug krijgt
const lastIndexOfMovies = movies.length - 1
console.log( lastIndexOfMovies )

// Opdracht 2c: Log het laatste object in de 'movies' array.
// Zorg dat het ook werkt als er meer films worden toegevoegd aan de array
// Tip: hergebruik de variabele uit de vorige opdracht

// Verwachte antwoord:
// {
//     title: '12 Angry Men',
//     releaseDate: 1957,
//     rating: 6.2,
//     actors: [ 'Henry Fonda', 'Lee J. Cobb', 'Martin Balsam' ]
// }

console.log( movies[lastIndexOfMovies] )

// ------------------------------------------------------------------------------ //
// Opdracht 3a: Log de lijst/array van acteurs uit de 'movies' array waar jouw favoriete acteur in voorkomt.
// Tip: we gaan nu het aanspreken van een array en een object nog een keer combineren

// Verwachte antwoord:
// Het antwoord is afhankelijk van jouw favoriete acteur,
// maar bij bijvoorbeeld Morgan Freeman is dit de lijst die je terug krijgt
// [ 'Tim Robbins', 'Morgan Freeman', 'Bob Gunton' ]

console.log( movies[0].actors )

// Opdracht 3b: Log uit de 'movies' array jouw favoriete acteur.
// Tip: we gaan nu het aanspreken van een array, een object en vervolgens weer een array combineren

// Verwachte antwoord:
// Morgan Freeman
console.log( movies[0].actors[1] )

// Opdracht 3c: Log de laatste acteur van de het laatste object in de 'movies' array.
// Zorg dat het ook werkt als er meer films worden toegevoegd aan de array
// Tip: hergebruik de variabele uit de vorige opdracht,
// maar pas deze aan zodat je de laatste plek in de array kunt aanspreken
// Tip: maak een variabele aan die het getal opslaat van de laatste plek in de lijst van acteurs van de laatste plek in de array

// Verwachte antwoord:
// Martin Balsam
const lastIndexOfActors = movies[lastIndexOfMovies].actors.length - 1
console.log( movies[lastIndexOfMovies].actors[lastIndexOfActors] )


// ------------------------------------------------------------------------------ //
// Opdracht 4a: Maak een if-else-statement die het woord 'Uitstekende film!!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Goede film!' logt, wanneer deze lager is.
// Zorg dat je de onderstaande variabele gebruikt en pas eventueel het entry-nummer aan,
// om te kijken of je algoritme ook werkt wanneer je een andere film selecteert

const selectedMovie = movies[3]

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

if( selectedMovie.rating > 8 ) {
    console.log('Uitstekende film!!')
} else {
    console.log('Goede film!')
}

// Opdracht 4b: Maak een if-else-if-else-statement die het woord 'Topper!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Kijktip!' logt, wanneer deze een 8 of lager is,
// maar wel hoger dan een 6 en een 'Matige film' logt bij een 6.5 of lager.
// Gebruik weer de variabele uit de vorige opdracht.
// Tip: gebruik de && selector als het getal binnen twee condities moet vallen

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

// Verwacht antwoord bij 'const selectedMovie = movies[5]':
// Matige film

if( selectedMovie.rating > 8 ) {
    console.log('Uitstekende film!!')
} else if( selectedMovie.rating <= 8 && selectedMovie.rating > 6.5) {
    console.log('Goede film!')
} else {
    console.log('Matige film')
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

for ( let i = 0; i < movies.length; i++ ) {
    console.log(movies[i])
}

// Opdracht 5b: Log met behulp van de for-loop elk film titel binnen de array

// Verwachte antwoord:
// The Shawshank Redemption
// The Godfather
// The Dark Knight
// Pulp Fiction
// The Lord of the Rings: The Return of the King
// 12 Angry Men

for ( let i = 0; i < movies.length; i++ ) {
    console.log(movies[i].title)
}


// Opdracht 5c: Log met behulp van de for-loop elk laatste acteur van elke film
// Tip: maak weer gebruik van een eerder gecreëerde variabele

for ( let i = 0; i < movies.length; i++ ) {
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

for ( let i = 0; i < movies.length; i++ ) {
    if( movies[i].rating > 8 ) {
        console.log('Uitstekende film!!')
    } else if( movies[i].rating <= 8 && movies[i].rating > 6.5) {
        console.log('Goede film!')
    } else {
        console.log('Matige film')
    }
}