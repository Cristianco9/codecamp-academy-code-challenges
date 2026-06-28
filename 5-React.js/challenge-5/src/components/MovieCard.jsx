import { useState } from "react";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {

    const [watched, setWatched] = useState(movie.watched);

    function toggleWatched() {
        setWatched(!watched);
    }

    return (
        <article className="movie-card">

            <h2>{movie.title}</h2>

            <p>
                <strong>Genre:</strong> {movie.genre}
            </p>

            <p>
                <strong>Year:</strong> {movie.year}
            </p>

            <p>
                <strong>Rating:</strong> {movie.rating}/10
            </p>

            <p
                className={
                    watched
                        ? "status watched"
                        : "status not-watched"
                }
            >
                {
                    watched
                        ? "✅ Watched"
                        : "📺 Not Watched"
                }
            </p>

            <button
                className={
                    watched
                        ? "btn-unwatch"
                        : "btn-watch"
                }
                onClick={toggleWatched}
            >
                {
                    watched
                        ? "Mark as Not Watched"
                        : "Mark as Watched"
                }
            </button>

        </article>
    );

}

export default MovieCard;