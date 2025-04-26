const employees = [
    { id: 1, name: 'Dixon', age: 10, department: 'IT', salary: 50000 },
    { id: 2, name: 'Harley', age: 4, department: 'HR', salary: 45000 },
    { id: 3, name: 'Loki', age: 8, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Thor', age: 9, department: 'Finance', salary: 75000 },
    { id: 5, name: 'Angela', age: 10, department: 'Finance', salary: 90000 },
    //... More employee records can be added here
  ];

 // Function to display all employees
function displayEmployees() {
    const totalEmployees = `
      <div>
        ${employees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('')}
      </div>
    `;
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
 

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML =
        `<p>No employee has been found with this ID.</p>`;
    }
  }
  