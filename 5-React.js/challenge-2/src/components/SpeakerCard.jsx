import { useState } from "react";
import "../styles/SpeakerCard.css";

function SpeakerCard({ speaker }) {

    const [available, setAvailable] = useState(speaker.available);

    function toggleAvailability() {
        setAvailable(!available);
    }

    return (
        <article className="speaker-card">

            <h3>{speaker.name}</h3>

            <p className="speaker-topic">
                🎤 {speaker.topic}
            </p>

            <p className="speaker-bio">
                {speaker.bio}
            </p>

            <p
                className={
                    available
                        ? "speaker-status available"
                        : "speaker-status unavailable"
                }
            >
                {
                    available
                        ? "✅ Available for Q&A"
                        : "❌ Unavailable"
                }
            </p>

            <button
                onClick={toggleAvailability}
                className={
                    available
                        ? "btn-unavailable"
                        : "btn-available"
                }
            >
                {
                    available
                        ? "Mark Unavailable"
                        : "Mark Available"
                }
            </button>

        </article>
    );

}

export default SpeakerCard;