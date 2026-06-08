// Author: Cristian Camilo Cortes Ortiz <Cristianco9>
// Challenge 16: Movie Watchlist Manager

// Initial watchlist
let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

// 1. Print total number of movies
console.log("Total movies:", watchlist.length);

// 2. Add "The Dark Knight"
watchlist.push("The Dark Knight");

// 3. Add "Avatar"
watchlist.push("Avatar");

// 4. Remove last movie
watchlist.pop();

// 5. Print first movie
console.log("First movie:", watchlist[0]);

// 6. Print last movie
console.log("Last movie:", watchlist[watchlist.length - 1]);

// 7. Check size of watchlist
if (watchlist.length >= 4) {
    console.log("You have many movies to watch!");
} else {
    console.log("Your watchlist is small.");
}

// 8. Print all movies with position starting from 1
for (let i = 0; i < watchlist.length; i++) {
    console.log((i + 1) + " - " + watchlist[i]);
}