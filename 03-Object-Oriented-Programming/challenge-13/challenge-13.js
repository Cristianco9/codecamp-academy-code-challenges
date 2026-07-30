// Challenge 13: Employee Profile Manager

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Employee object
const employee = {
    employeeId: "EMP-1025",
    firstName: "Sarah",
    lastName: "Johnson",
    age: 31,
    position: "Full-Stack Software Developer",
    department: "Engineering",
    salaryUSD: 6800,
    yearsOfExperience: 7,
    hireDate: "2021-04-12",
    employmentStatus: "Full-Time",
    email: "sarah.johnson@company.com",
    phoneNumber: "+1-555-123-4567",
    isRemoteEmployee: true,

    technicalSkills: [
        "JavaScript",
        "Node.js",
        "React",
        "PostgreSQL",
        "Docker"
    ],

    certifications: [
        "AWS Certified Developer",
        "Scrum Fundamentals",
        "MongoDB Associate Developer"
    ],

    emergencyContact: {
        name: "Michael Johnson",
        relationship: "Brother",
        phoneNumber: "+1-555-987-6543"
    },

    workSchedule: {
        shift: "Morning",
        startTime: "08:00",
        endTime: "17:00",
        workDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ]
    },

    officeLocation: {
        building: "Technology Center",
        floor: 5,
        desk: "A-23"
    },

    getEmployeeSummary: function () {
        return (
            this.firstName +
            " " +
            this.lastName +
            " works as a " +
            this.position +
            " in the " +
            this.department +
            " department."
        );
    }
};

// ---------------------
// Desktop Test
// ---------------------

console.log(employee);

console.log("Employee ID:", employee.employeeId);
console.log("Employee:", employee.firstName, employee.lastName);
console.log("Department:", employee.department);
console.log("Position:", employee.position);
console.log("Salary: $" + employee.salaryUSD);

console.log("Technical Skills:");
console.log(employee.technicalSkills);

console.log("Certifications:");
console.log(employee.certifications);

console.log("Emergency Contact:");
console.log(employee.emergencyContact);

console.log("Office Location:");
console.log(employee.officeLocation);

console.log("Summary:");
console.log(employee.getEmployeeSummary());

/*
-------------------------------------------------
DESKTOP TEST (EXPECTED OUTPUT)
-------------------------------------------------

Print complete employee object.

Employee ID: EMP-1025
Employee: Sarah Johnson
Department: Engineering
Position: Full-Stack Software Developer
Salary: $6800

Technical Skills:
[
  "JavaScript",
  "Node.js",
  "React",
  "PostgreSQL",
  "Docker"
]

Certifications:
[
  "AWS Certified Developer",
  "Scrum Fundamentals",
  "MongoDB Associate Developer"
]

Emergency Contact:
{
  name: "Michael Johnson",
  relationship: "Brother",
  phoneNumber: "+1-555-987-6543"
}

Office Location:
{
  building: "Technology Center",
  floor: 5,
  desk: "A-23"
}

Summary:
Sarah Johnson works as a Full-Stack Software Developer
in the Engineering department.

-------------------------------------------------
*/