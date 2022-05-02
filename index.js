// Write your solution in this file!
const employee = {
    name : "Lauren Metz",
    adress : "1529 115th street"
}

//returns an employee with the original key value pairs and a new pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

//updates employee with a key and value destructively 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//deletes a key from an employee and returns the new employee
function deleteFromEmployeeByKey(employee, key) {
    const tempEmployee = {...employee};
    delete tempEmployee[key];
    return tempEmployee;
}

//destructively deletes a key from an employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}