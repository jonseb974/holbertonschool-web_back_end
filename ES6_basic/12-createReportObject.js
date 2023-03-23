export default function createReportObject(employeesList) {

    const allEmployees = []; //Create an object to hold all employees

    employeesList.forEach(employee => {
        const { department, ...employeeData } = employee;
        if (allEmployees.hasOwnProperty(department)) {
            allEmployees[department] = [...allEmployees[department], employeeData];
        } else {
            allEmployees[department] = [employeeData];
        }
    });

    return {
        allEmployees,
        getNumberOfDepartments(){
            return Object.keys(allEmployees).length;
        },
    };
}
