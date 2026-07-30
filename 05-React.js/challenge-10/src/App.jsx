import "./styles/App.css";

import ProjectCard from "./components/ProjectCard";

const projects = [
    {
        id: 1,
        name: "Online Banking Platform",
        client: "Global Bank",
        manager: "Alice Johnson",
        priority: "High",
        progress: 75,
        teamSize: 8,
        active: true
    },
    {
        id: 2,
        name: "Hospital Management System",
        client: "City Hospital",
        manager: "David Smith",
        priority: "High",
        progress: 92,
        teamSize: 12,
        active: true
    },
    {
        id: 3,
        name: "E-Commerce Marketplace",
        client: "ShopEasy",
        manager: "Emma Davis",
        priority: "Medium",
        progress: 48,
        teamSize: 7,
        active: true
    },
    {
        id: 4,
        name: "Learning Management Platform",
        client: "Bright Academy",
        manager: "Michael Brown",
        priority: "Medium",
        progress: 65,
        teamSize: 6,
        active: true
    },
    {
        id: 5,
        name: "Fleet Tracking System",
        client: "Fast Logistics",
        manager: "Sarah Wilson",
        priority: "Low",
        progress: 100,
        teamSize: 5,
        active: false
    },
    {
        id: 6,
        name: "Hotel Reservation Portal",
        client: "Luxury Hotels",
        manager: "Lucas Miller",
        priority: "Medium",
        progress: 34,
        teamSize: 9,
        active: true
    },
    {
        id: 7,
        name: "Smart Agriculture Platform",
        client: "AgriTech",
        manager: "Sophia Martinez",
        priority: "High",
        progress: 81,
        teamSize: 10,
        active: true
    },
    {
        id: 8,
        name: "Food Delivery Application",
        client: "QuickFood",
        manager: "James Anderson",
        priority: "Low",
        progress: 27,
        teamSize: 4,
        active: false
    },
    {
        id: 9,
        name: "Inventory Management System",
        client: "Retail Corp",
        manager: "Olivia Thomas",
        priority: "Medium",
        progress: 56,
        teamSize: 7,
        active: true
    },
    {
        id: 10,
        name: "Airline Booking System",
        client: "Sky Airlines",
        manager: "Benjamin Harris",
        priority: "High",
        progress: 96,
        teamSize: 15,
        active: true
    }
];

function App() {

    const totalProjects = projects.length;

    const activeProjects = projects.filter(
        (project) => project.active
    ).length;

    const archivedProjects = projects.filter(
        (project) => !project.active
    ).length;

    const highPriorityProjects = projects.filter(
        (project) => project.priority === "High"
    ).length;

    const mediumPriorityProjects = projects.filter(
        (project) => project.priority === "Medium"
    ).length;

    const lowPriorityProjects = projects.filter(
        (project) => project.priority === "Low"
    ).length;

    const averageProgress = Math.round(

        projects.reduce(

            (sum, project) => {

                return sum + project.progress;

            },

            0

        ) / totalProjects

    );

    const totalDevelopers = projects.reduce(

        (sum, project) => {

            return sum + project.teamSize;

        },

        0

    );

    return (

        <main className="app">

            <header className="dashboard-header">

                <h1>

                    Project Management Dashboard

                </h1>

                <div className="statistics-grid">

                    <div className="stat-card">

                        <h3>Total Projects</h3>

                        <p>{totalProjects}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Active Projects</h3>

                        <p>{activeProjects}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Archived Projects</h3>

                        <p>{archivedProjects}</p>

                    </div>

                    <div className="stat-card">

                        <h3>High Priority</h3>

                        <p>{highPriorityProjects}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Medium Priority</h3>

                        <p>{mediumPriorityProjects}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Low Priority</h3>

                        <p>{lowPriorityProjects}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Average Progress</h3>

                        <p>

                            {averageProgress}%

                        </p>

                    </div>

                    <div className="stat-card">

                        <h3>Total Developers</h3>

                        <p>{totalDevelopers}</p>

                    </div>

                </div>

            </header>

            <section className="projects-grid">

                {

                    projects.map((project) => (

                        <ProjectCard

                            key={project.id}

                            project={project}

                        />

                    ))

                }

            </section>

        </main>

    );

}

export default App;