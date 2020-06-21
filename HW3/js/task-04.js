const employees = {
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  };

const countTotalSalary = function(employees) {
    const arr = Object.values(employees);
    let total = 0;
    for ( let i = 0; i < arr.length; i ++){
        total += arr[i];
    }
    return total;

  };
  console.log(countTotalSalary(employees));
  