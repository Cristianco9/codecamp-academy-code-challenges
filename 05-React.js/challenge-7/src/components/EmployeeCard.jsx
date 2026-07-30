import { useState } from "react";
import "../styles/SpeakerCard.css";

function EmployeeCard({ employee }) {

    const [active, setActive] = useState(employee.active);

    function toggleStatus() {
        setActive(!active);
    }

    return (

        <article className="employee-card">

            <div className="employee-avatar">
                {employee.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                }
            </div>

            <h2>{employee.name}</h2>

            <p>
                <strong>Position:</strong>
                {" "}
                {employee.position}
            </p>

            <p>
                <strong>Department:</strong>
                {" "}
                {employee.department}
            </p>

            <p>
                <strong>Years of Service:</strong>
                {" "}
                {employee.yearsOfService}
            </p>

            <p>
                <strong>Salary:</strong>
                {" "}
                $
                {employee.salary.toLocaleString()}
            </p>

            <p
                className={
                    active
                        ? "status active"
                        : "status inactive"
                }
            >
                {
                    active
                        ? "✅ Active"
                        : "❌ Inactive"
                }
            </p>

            <button
                className={
                    active
                        ? "btn-deactivate"
                        : "btn-activate"
                }
                onClick={toggleStatus}
            >
                {
                    active
                        ? "Deactivate Employee"
                        : "Activate Employee"
                }
            </button>

        </article>

    );

}

export default EmployeeCard;