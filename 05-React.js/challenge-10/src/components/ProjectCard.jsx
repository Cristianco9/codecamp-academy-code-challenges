import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {

    const [active, setActive] = useState(
        project.active
    );

    function toggleProjectStatus() {

        setActive(!active);

    }

    function getPriorityClass() {

        switch (project.priority) {

            case "High":
                return "priority high";

            case "Medium":
                return "priority medium";

            default:
                return "priority low";

        }

    }

    function getPriorityIcon() {

        switch (project.priority) {

            case "High":
                return "🔴";

            case "Medium":
                return "🟡";

            default:
                return "🟢";

        }

    }

    function getProgressColor() {

        if (project.progress >= 90) {

            return "progress excellent";

        }

        if (project.progress >= 60) {

            return "progress good";

        }

        if (project.progress >= 30) {

            return "progress warning";

        }

        return "progress danger";

    }

    const managerInitials = project.manager
        .split(" ")
        .map((word) => word[0])
        .join("");

    return (

        <article className="project-card">

            <div className="project-header">

                <div className="manager-avatar">

                    {managerInitials}

                </div>

                <div>

                    <h2>{project.name}</h2>

                    <p className="client-name">

                        {project.client}

                    </p>

                </div>

            </div>

            <div className="project-details">

                <p>

                    <strong>Manager:</strong>

                    {" "}

                    {project.manager}

                </p>

                <p>

                    <strong>Team Size:</strong>

                    {" "}

                    {project.teamSize} Developers

                </p>

                <p className={getPriorityClass()}>

                    {getPriorityIcon()}

                    {" "}

                    {project.priority} Priority

                </p>

            </div>

            <div className="progress-section">

                <div className="progress-header">

                    <span>

                        Project Progress

                    </span>

                    <span>

                        {project.progress}%

                    </span>

                </div>

                <div className="progress-bar">

                    <div
                        className={getProgressColor()}
                        style={{
                            width:
                                `${project.progress}%`
                        }}
                    ></div>

                </div>

            </div>

            {

                project.progress === 100 && (

                    <div className="completed-badge">

                        🎉 Project Completed

                    </div>

                )

            }

            <div
                className={
                    active
                        ? "status active"
                        : "status archived"
                }
            >

                {

                    active
                        ? "✅ Active"
                        : "📦 Archived"

                }

            </div>

            <button
                className={
                    active
                        ? "btn-archive"
                        : "btn-reactivate"
                }
                onClick={toggleProjectStatus}
            >

                {

                    active
                        ? "Archive Project"
                        : "Reactivate Project"

                }

            </button>

        </article>

    );

}

export default ProjectCard;