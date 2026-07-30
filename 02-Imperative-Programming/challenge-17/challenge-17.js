// Author: Cristian Camilo Cortes Ortiz <Cristianco9>
// Challenge 17: Daily Task Scheduler

// Initial tasks array
let tasks = [
    "Check emails",
    "Write report",
    "Attend meeting",
    "Review code"
];

// 1. Print total number of tasks
console.log("Total tasks:", tasks.length);

// 2. Add new task at the end
tasks.push("Plan tomorrow's work");

// 3. Add task at the beginning
tasks.unshift("Morning exercise");

// 4. Find position of "Attend meeting"
let meetingIndex = tasks.indexOf("Attend meeting");
console.log("Position of 'Attend meeting':", meetingIndex);

// 5. Mark "Attend meeting" as completed
if (meetingIndex !== -1) {
    tasks[meetingIndex] = "Attend meeting (Completed)";
}

// 6. Remove "Check emails"
let emailIndex = tasks.indexOf("Check emails");
if (emailIndex !== -1) {
    tasks.splice(emailIndex, 1);
}

// 7. Print all remaining tasks
console.log("Tasks for today:");
for (let i = 0; i < tasks.length; i++) {
    console.log("Task " + (i + 1) + ": " + tasks[i]);
}

// 8. Check if "Review code" still exists
if (tasks.includes("Review code")) {
    console.log("Task still pending");
} else {
    console.log("Task completed or removed");
}