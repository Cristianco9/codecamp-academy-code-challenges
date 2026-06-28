import "../styles/TechnologyCard.css";

function TechnologyCard({ name, description, icon }) {

    return (

        <article className="technology-card">

            <div className="technology-icon">
                {icon}
            </div>

            <h3>{name}</h3>

            <p>{description}</p>

        </article>

    );

}

export default TechnologyCard;