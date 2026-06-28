import { useState } from "react";
import "../styles/CertificationsList.css";

function CertificationsList() {

    const certifications = [
        {
            id: 1,
            title: "React Developer",
            provider: "Meta"
        },
        {
            id: 2,
            title: "JavaScript Algorithms",
            provider: "freeCodeCamp"
        },
        {
            id: 3,
            title: "Python Programming",
            provider: "Coursera"
        },
        {
            id: 4,
            title: "Node.js Fundamentals",
            provider: "OpenJS Foundation"
        },
        {
            id: 5,
            title: "AWS Cloud Practitioner",
            provider: "Amazon Web Services"
        }
    ];

    const [
        showCertifications,
        setShowCertifications
    ] = useState(true);

    function toggleCertifications() {
        setShowCertifications(!showCertifications);
    }

    return (
        <section className="certifications-card">

            <h2>Developer Certifications</h2>

            <button onClick={toggleCertifications}>
                {
                    showCertifications
                        ? "Hide Certifications"
                        : "Show Certifications"
                }
            </button>

            {
                showCertifications && (

                    <ul className="certification-list">

                        {
                            certifications.map((certification) => (

                                <li
                                    key={certification.id}
                                >
                                    <strong>
                                        {certification.title}
                                    </strong>

                                    {" - "}

                                    {certification.provider}

                                </li>

                            ))
                        }

                    </ul>

                )
            }

        </section>
    );

}

export default CertificationsList;