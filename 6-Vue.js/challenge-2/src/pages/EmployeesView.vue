<script setup>

import { ref, computed } from "vue";

import "../styles/employeesView.css";

import EmployeeCard from "../components/EmployeeCard.vue";

import { employees } from "../data/employees";

const search = ref("");

const selectedDepartment = ref("All Departments");

const selectedStatus = ref("All Statuses");

const departments = [

    "All Departments",

    "Engineering",

    "Marketing",

    "Human Resources",

    "Finance",

    "Sales"

];

const statuses = [

    "All Statuses",

    "Active",

    "On Leave"

];

const filteredEmployees = computed(() => {

    return employees.filter((employee) => {

        const matchesSearch =
            employee.name
                .toLowerCase()
                .includes(
                    search.value.toLowerCase()
                );

        const matchesDepartment =
            selectedDepartment.value ===
                "All Departments"
            ||
            employee.department ===
                selectedDepartment.value;

        const matchesStatus =
            selectedStatus.value ===
                "All Statuses"
            ||
            employee.status ===
                selectedStatus.value;

        return (
            matchesSearch &&
            matchesDepartment &&
            matchesStatus
        );

    });

});

const totalEmployees = computed(() => {

    return employees.length;

});

const activeEmployees = computed(() => {

    return employees.filter((employee) => {

        return employee.status === "Active";

    }).length;

});

const employeesOnLeave = computed(() => {

    return employees.filter((employee) => {

        return employee.status ===
            "On Leave";

    }).length;

});

const averageExperience = computed(() => {

    const totalExperience =
        employees.reduce((sum, employee) => {

            return (
                sum + employee.experience
            );

        }, 0);

    return (
        totalExperience /
        employees.length
    ).toFixed(1);

});

</script>

<template>

    <section class="employees-page">

        <header class="page-header">

            <h1>

                Employee Directory

            </h1>

            <p>

                Browse employees, search by
                name, filter by department,
                and explore company statistics.

            </p>

        </header>

        <section class="statistics-grid">

            <div class="stat-card">

                <h3>Total Employees</h3>

                <p>

                    {{ totalEmployees }}

                </p>

            </div>

            <div class="stat-card">

                <h3>Active Employees</h3>

                <p>

                    {{ activeEmployees }}

                </p>

            </div>

            <div class="stat-card">

                <h3>On Leave</h3>

                <p>

                    {{ employeesOnLeave }}

                </p>

            </div>

            <div class="stat-card">

                <h3>

                    Avg. Experience

                </h3>

                <p>

                    {{ averageExperience }}
                    Years

                </p>

            </div>

        </section>

        <section class="filters">

            <input
                v-model="search"
                type="text"
                placeholder="Search employee..."
            >

            <select
                v-model="selectedDepartment"
            >

                <option
                    v-for="department in departments"
                    :key="department"
                    :value="department"
                >

                    {{ department }}

                </option>

            </select>

            <select
                v-model="selectedStatus"
            >

                <option
                    v-for="status in statuses"
                    :key="status"
                    :value="status"
                >

                    {{ status }}

                </option>

            </select>

        </section>

        <section
            v-if="filteredEmployees.length"
            class="employees-grid"
        >

            <EmployeeCard

                v-for="employee
                    in filteredEmployees"

                :key="employee.id"

                :employee="employee"

            />

        </section>

        <section
            v-else
            class="empty-state"
        >

            <h2>

                No employees found.

            </h2>

            <p>

                Try adjusting your search
                or filter criteria.

            </p>

        </section>

    </section>

</template>