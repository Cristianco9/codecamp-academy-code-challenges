import "./App.css";

import MovieCard from "./components/MovieCard";

const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Science Fiction",
        year: 2010,
        rating: 8.8,
        watched: true
    },
    {
        id: 2,
        title: "Interstellar",
        genre: "Science Fiction",
        year: 2014,
        rating: 8.7,
        watched: false
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        watched: true
    },
    {
        id: 4,
        title: "Gladiator",
        genre: "Historical Drama",
        year: 2000,
        rating: 8.5,
        watched: false
    },
    {
        id: 5,
        title: "The Matrix",
        genre: "Science Fiction",
        year: 1999,
        rating: 8.7,
        watched: true
    },
    {
        id: 6,
        title: "Avatar",
        genre: "Adventure",
        year: 2009,
        rating: 7.9,
        watched: false
    }
];

function App() {

    const totalMovies = movies.length;

    const averageRating =
        (
            movies.reduce(
                (sum, movie) => sum + movie.rating,
                0
            ) / totalMovies
        ).toFixed(1);

    return (

        <main className="app">

            <header className="dashboard-header">

                <h1>
                    Favorite Movies Dashboard
                </h1>

                <p>
                    Total Movies:
                    <strong> {totalMovies}</strong>
                </p>

                <p>
                    Average Rating:
                    <strong> {averageRating}</strong>
                </p>

            </header>

            <section className="movie-grid">

                {
                    movies.map((movie) => (

                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />

                    ))
                }

            </section>

        </main>

    );

}

export default App;