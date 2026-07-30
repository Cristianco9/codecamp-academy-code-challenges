import "./styles/App.css";

import TicketCard from "./components/TicketCard";

const tickets = [
    {
        id: 1,
        customer: "Alice Johnson",
        subject: "Cannot reset my password",
        category: "Authentication",
        priority: "High",
        assignedTo: "David Smith",
        resolved: false
    },
    {
        id: 2,
        customer: "Michael Brown",
        subject: "Billing invoice is incorrect",
        category: "Billing",
        priority: "Medium",
        assignedTo: "Sarah Wilson",
        resolved: true
    },
    {
        id: 3,
        customer: "Sophia Martinez",
        subject: "Application crashes on startup",
        category: "Bug Report",
        priority: "High",
        assignedTo: "Emma Davis",
        resolved: false
    },
    {
        id: 4,
        customer: "James Anderson",
        subject: "Dark mode feature request",
        category: "Feature Request",
        priority: "Low",
        assignedTo: "David Smith",
        resolved: true
    },
    {
        id: 5,
        customer: "Emily Taylor",
        subject: "Unable to upload profile picture",
        category: "Technical Support",
        priority: "Medium",
        assignedTo: "Lucas Miller",
        resolved: false
    },
    {
        id: 6,
        customer: "William Moore",
        subject: "Email verification never arrives",
        category: "Authentication",
        priority: "High",
        assignedTo: "Sarah Wilson",
        resolved: false
    },
    {
        id: 7,
        customer: "Olivia Thomas",
        subject: "Refund request",
        category: "Billing",
        priority: "Low",
        assignedTo: "Emma Davis",
        resolved: true
    },
    {
        id: 8,
        customer: "Daniel White",
        subject: "Slow dashboard performance",
        category: "Technical Support",
        priority: "Medium",
        assignedTo: "Lucas Miller",
        resolved: false
    },
    {
        id: 9,
        customer: "Isabella Garcia",
        subject: "Unexpected logout after login",
        category: "Bug Report",
        priority: "High",
        assignedTo: "David Smith",
        resolved: false
    },
    {
        id: 10,
        customer: "Benjamin Harris",
        subject: "Add export to PDF feature",
        category: "Feature Request",
        priority: "Low",
        assignedTo: "Emma Davis",
        resolved: true
    }
];

function App() {

    const totalTickets = tickets.length;

    const openTickets = tickets.filter(
        (ticket) => !ticket.resolved
    ).length;

    const resolvedTickets = tickets.filter(
        (ticket) => ticket.resolved
    ).length;

    const highPriority = tickets.filter(
        (ticket) => ticket.priority === "High"
    ).length;

    const mediumPriority = tickets.filter(
        (ticket) => ticket.priority === "Medium"
    ).length;

    const lowPriority = tickets.filter(
        (ticket) => ticket.priority === "Low"
    ).length;

    const authenticationTickets = tickets.filter(
        (ticket) =>
            ticket.category === "Authentication"
    ).length;

    const billingTickets = tickets.filter(
        (ticket) =>
            ticket.category === "Billing"
    ).length;

    const bugReports = tickets.filter(
        (ticket) =>
            ticket.category === "Bug Report"
    ).length;

    return (

        <main className="app">

            <header className="dashboard-header">

                <h1>
                    Customer Support Dashboard
                </h1>

                <div className="statistics-grid">

                    <div className="stat-card">

                        <h3>Total Tickets</h3>

                        <p>{totalTickets}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Open Tickets</h3>

                        <p>{openTickets}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Resolved Tickets</h3>

                        <p>{resolvedTickets}</p>

                    </div>

                    <div className="stat-card">

                        <h3>High Priority</h3>

                        <p>{highPriority}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Medium Priority</h3>

                        <p>{mediumPriority}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Low Priority</h3>

                        <p>{lowPriority}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Authentication</h3>

                        <p>
                            {authenticationTickets}
                        </p>

                    </div>

                    <div className="stat-card">

                        <h3>Billing</h3>

                        <p>{billingTickets}</p>

                    </div>

                    <div className="stat-card">

                        <h3>Bug Reports</h3>

                        <p>{bugReports}</p>

                    </div>

                </div>

            </header>

            <section className="tickets-grid">

                {

                    tickets.map((ticket) => (

                        <TicketCard

                            key={ticket.id}

                            ticket={ticket}

                        />

                    ))

                }

            </section>

        </main>

    );

}

export default App;