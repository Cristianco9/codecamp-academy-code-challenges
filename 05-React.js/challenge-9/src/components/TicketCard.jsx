import { useState } from "react";
import "./TicketCard.css";

function TicketCard({ ticket }) {

    const [resolved, setResolved] = useState(
        ticket.resolved
    );

    function toggleStatus() {

        setResolved(!resolved);

    }

    function getPriorityClass() {

        switch (ticket.priority) {

            case "High":
                return "priority high";

            case "Medium":
                return "priority medium";

            default:
                return "priority low";

        }

    }

    function getPriorityIcon() {

        switch (ticket.priority) {

            case "High":
                return "🔴";

            case "Medium":
                return "🟡";

            default:
                return "🟢";

        }

    }

    return (

        <article className="ticket-card">

            <div className="ticket-avatar">

                {

                    ticket.customer
                        .split(" ")
                        .map((word) => word[0])
                        .join("")

                }

            </div>

            <h2>{ticket.customer}</h2>

            <p>

                <strong>Subject:</strong>

                {" "}

                {ticket.subject}

            </p>

            <p>

                <strong>Category:</strong>

                {" "}

                {ticket.category}

            </p>

            <p>

                <strong>Assigned To:</strong>

                {" "}

                {ticket.assignedTo}

            </p>

            <p className={getPriorityClass()}>

                {getPriorityIcon()}

                {" "}

                {ticket.priority} Priority

            </p>

            <p
                className={
                    resolved
                        ? "status resolved"
                        : "status open"
                }
            >

                {

                    resolved
                        ? "✅ Resolved"
                        : "❌ Open"

                }

            </p>

            <button
                className={
                    resolved
                        ? "btn-reopen"
                        : "btn-resolve"
                }
                onClick={toggleStatus}
            >

                {

                    resolved
                        ? "Reopen Ticket"
                        : "Mark as Resolved"

                }

            </button>

        </article>

    );

}

export default TicketCard;