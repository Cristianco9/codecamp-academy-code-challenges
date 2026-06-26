// Challenge 15: University Course Information System

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// University course object
const course = {
    courseCode: "CS301",
    courseName: "Advanced JavaScript Programming",
    department: "Computer Science",
    instructor: {
        firstName: "Cristian",
        lastName: "Cortes Ortiz",
        email: "cristian.cortes@university.edu",
        office: "Building A - Room 305"
    },
    credits: 4,
    semester: "Fall",
    academicYear: 2026,
    classroom: "Lab 204",
    maximumStudents: 35,
    enrolledStudents: 28,
    isOnline: false,
    durationWeeks: 16,
    language: "English",

    prerequisites: [
        "Introduction to Programming",
        "Object-Oriented Programming",
        "Web Development Fundamentals"
    ],

    topics: [
        "Functions",
        "Objects",
        "Arrays",
        "DOM Manipulation",
        "ES6 Features",
        "Asynchronous JavaScript"
    ],

    schedule: {
        days: ["Monday", "Wednesday"],
        startTime: "09:00",
        endTime: "11:00"
    },

    gradingPolicy: {
        assignments: 30,
        midtermExam: 25,
        finalProject: 25,
        finalExam: 20
    },

    textbook: {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        edition: "4th"
    },

    getCourseSummary: function () {
        return (
            this.courseCode +
            " - " +
            this.courseName +
            " (" +
            this.credits +
            " credits)"
        );
    }
};

// ---------------------
// Desktop Test
// ---------------------

console.log(course);

console.log("Course Code:", course.courseCode);
console.log("Course Name:", course.courseName);
console.log("Department:", course.department);

console.log(
    "Instructor:",
    course.instructor.firstName,
    course.instructor.lastName
);

console.log("Credits:", course.credits);
console.log("Semester:", course.semester);
console.log("Academic Year:", course.academicYear);

console.log("Prerequisites:");
console.log(course.prerequisites);

console.log("Topics Covered:");
console.log(course.topics);

console.log("Schedule:");
console.log(course.schedule);

console.log("Grading Policy:");
console.log(course.gradingPolicy);

console.log("Textbook:");
console.log(course.textbook);

console.log("Course Summary:");
console.log(course.getCourseSummary());

/*
-------------------------------------------------
DESKTOP TEST (EXPECTED OUTPUT)
-------------------------------------------------

Print complete course object.

Course Code: CS301
Course Name: Advanced JavaScript Programming
Department: Computer Science

Instructor:
Cristian Cortes Ortiz

Credits: 4
Semester: Fall
Academic Year: 2026

Prerequisites:
[
  "Introduction to Programming",
  "Object-Oriented Programming",
  "Web Development Fundamentals"
]

Topics Covered:
[
  "Functions",
  "Objects",
  "Arrays",
  "DOM Manipulation",
  "ES6 Features",
  "Asynchronous JavaScript"
]

Schedule:
{
  days: ["Monday", "Wednesday"],
  startTime: "09:00",
  endTime: "11:00"
}

Grading Policy:
{
  assignments: 30,
  midtermExam: 25,
  finalProject: 25,
  finalExam: 20
}

Textbook:
{
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  edition: "4th"
}

Course Summary:
CS301 - Advanced JavaScript Programming (4 credits)

-------------------------------------------------
*/