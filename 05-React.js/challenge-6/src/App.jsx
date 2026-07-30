import "./styles/App.css";

import CourseCard from "./components/CourseCard";

const courses = [
    {
        id: 1,
        title: "React Fundamentals",
        instructor: "John Smith",
        duration: "8 Weeks",
        level: "Beginner",
        enrolled: true
    },
    {
        id: 2,
        title: "Modern JavaScript",
        instructor: "Sarah Johnson",
        duration: "6 Weeks",
        level: "Beginner",
        enrolled: false
    },
    {
        id: 3,
        title: "Node.js Essentials",
        instructor: "Michael Brown",
        duration: "10 Weeks",
        level: "Intermediate",
        enrolled: true
    },
    {
        id: 4,
        title: "Express.js APIs",
        instructor: "Emily Davis",
        duration: "8 Weeks",
        level: "Intermediate",
        enrolled: false
    },
    {
        id: 5,
        title: "Cloud Computing with AWS",
        instructor: "David Wilson",
        duration: "12 Weeks",
        level: "Advanced",
        enrolled: true
    },
    {
        id: 6,
        title: "Microservices Architecture",
        instructor: "Sophia Martinez",
        duration: "14 Weeks",
        level: "Advanced",
        enrolled: false
    }
];

function App() {

    const totalCourses = courses.length;

    const beginnerCourses = courses.filter(
        (course) => course.level === "Beginner"
    ).length;

    const intermediateCourses = courses.filter(
        (course) => course.level === "Intermediate"
    ).length;

    const advancedCourses = courses.filter(
        (course) => course.level === "Advanced"
    ).length;

    return (

        <main className="app">

            <header className="dashboard-header">

                <h1>
                    Course Enrollment Dashboard
                </h1>

                <p>
                    Total Courses:
                    <strong>
                        {" "}
                        {totalCourses}
                    </strong>
                </p>

                <p>
                    Beginner Courses:
                    <strong>
                        {" "}
                        {beginnerCourses}
                    </strong>
                </p>

                <p>
                    Intermediate Courses:
                    <strong>
                        {" "}
                        {intermediateCourses}
                    </strong>
                </p>

                <p>
                    Advanced Courses:
                    <strong>
                        {" "}
                        {advancedCourses}
                    </strong>
                </p>

            </header>

            <section className="course-grid">

                {
                    courses.map((course) => (

                        <CourseCard
                            key={course.id}
                            course={course}
                        />

                    ))
                }

            </section>

        </main>

    );

}

export default App;