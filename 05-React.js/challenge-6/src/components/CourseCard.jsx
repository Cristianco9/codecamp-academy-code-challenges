import { useState } from "react";
import "../styles/CourseCard.css";

function CourseCard({ course }) {

    const [enrolled, setEnrolled] = useState(course.enrolled);

    function toggleEnrollment() {
        setEnrolled(!enrolled);
    }

    return (

        <article className="course-card">

            <h2>{course.title}</h2>

            <p>
                <strong>Instructor:</strong>
                {" "}
                {course.instructor}
            </p>

            <p>
                <strong>Duration:</strong>
                {" "}
                {course.duration}
            </p>

            <p>
                <strong>Level:</strong>
                {" "}
                {course.level}
            </p>

            <p
                className={
                    enrolled
                        ? "status enrolled"
                        : "status not-enrolled"
                }
            >
                {
                    enrolled
                        ? "✅ Enrolled"
                        : "📚 Not Enrolled"
                }
            </p>

            <button
                className={
                    enrolled
                        ? "btn-leave"
                        : "btn-enroll"
                }
                onClick={toggleEnrollment}
            >
                {
                    enrolled
                        ? "Leave Course"
                        : "Enroll Now"
                }
            </button>

        </article>

    );

}

export default CourseCard;