const employees = {
    poly: 12,
    mango: 17,
    ajax: 42,
  };
const findBestEmployee = function(employees) {
const tasks = Object.keys(employees);
let workTasks = 0;
let besrEmployeeName;
for (const task of tasks){    
    if(employees[task] > workTasks){
        workTasks = employees[task];
        besrEmployeeName = task;
    }
}
return besrEmployeeName;

};
console.log(findBestEmployee(employees));

