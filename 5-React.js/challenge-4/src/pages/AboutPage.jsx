import { Link } from "react-router-dom";

import TechnologyCard from "../components/TechnologyCard";

import "../styles/AboutPage.css";

const technologies = [

    {
        id: 1,
        name: "React",
        icon: "⚛️",
        description:
            "JavaScript library for building user interfaces."
    },

    {
        id: 2,
        name: "React Router",
        icon: "🧭",
        description:
            "Provides client-side routing for Single Page Applications."
    },

    {
        id: 3,
        name: "Axios",
        icon: "📡",
        description:
            "Promise-based HTTP client used to consume APIs."
    },

    {
        id: 4,
        name: "Bootstrap",
        icon: "🎨",
        description:
            "CSS framework for building responsive interfaces."
    },

    {
        id: 5,
        name: "TVMaze API",
        icon: "🎬",
        description:
            "Public REST API used to retrieve TV show information."
    }

];

function AboutPage() {

    return (

        <main className="about-page">

            <h1>
                About React Movies Dashboard
            </h1>

            <p className="about-description">

                This application allows users to search,
                discover, and explore TV shows using
                the TVMaze API.

                It demonstrates the fundamentals of
                modern React development, including
                components, routing, reusable UI,
                API consumption, and responsive design.

            </p>

            <section className="technology-grid">

                {

                    technologies.map((technology) => (

                        <TechnologyCard

                            key={technology.id}

                            name={technology.name}

                            description={
                                technology.description
                            }

                            icon={technology.icon}

                        />

                    ))

                }

            </section>

            <Link
                to="/"
                className="home-button"
            >
                ← Back to Home
            </Link>

        </main>

    );

}

export default AboutPage;