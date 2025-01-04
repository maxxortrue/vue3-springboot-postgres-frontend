<template>
    <div class = "container">
            
            <h1 class = "text-center"> Employees List</h1>

            <table class = "table table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee First Name</th>
                        <th> Employee Last</th>
                        <th> Employee Email</th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="employee in employees" v-bind:key="employee.id">
                        <td> {{employee.id }}</td>
                        <td> {{employee.firstName }}</td>
                        <td> {{employee.lastName}}</td>    
                        <td> {{employee.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import EmployeeService from '../services/EmployeeService';

export default {
    name: 'Employees',
    data(){
        return {
            employees: [],
            loading: false,
            error: null,
        }
    },
    methods: {
        getEmployees() {
            this.loading = true;
            this.error = null;  // Reset any previous errors
            EmployeeService.getEmployees()
                .then((response) => {
                    this.employees = response.data;
                    this.loading = false;
                })
                .catch((error) => {
                    console.error('Error fetching employees:', error); // Log the error to the console
                    this.error = 'There was an error fetching the employees.';
                    this.loading = false;
                });
        },
    },
    created() {
        this.getEmployees();
    }
}

</script>