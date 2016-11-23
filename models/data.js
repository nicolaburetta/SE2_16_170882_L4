var employees = {
  items: [{
    id: 1,
    name: 'Nicola',
    surname: 'Schiavon',
    level: 9000,
    salary: 10
  }],
  add: function(ID, Name, Surname, Level, Salary) {
    var empID = ID;
    var index = getEmpIndexById(empID, this.items);
    
    if (empID == '') {
      var idMax = -1;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id > idMax) {
          idMax = this.items[i].id;
        }
      }
      // first free id
      empID = ++idMax;
    }
    if (index == -1) {
      index = this.items.length;
    }
    
    this.items[index] = {
      id: empID,
      name: Name,
      surname: Surname,
      level: Level,
      salary: Salary
    };
  },
  get: function(id) {
    var e = {
      id: '',
      name: '',
      surname: '',
      level: '',
      salary: ''
    };

    var index = getEmpIndexById(id, this.items);

    if (index > -1) {
      e = this.items[index];
    }

    return e;
  },
  delete: function(id) {
    var index = getEmpIndexById(id, this.items);
    
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
};

// return the index (position) of the 'id' employee
// return -1 if the 'id' employee is not in the list
function getEmpIndexById(id, empList) {
  var index = 0;
  var found = false;
  
  while (!found && index < empList.length) {
    found = empList[index].id == id;
    index++;
  }
  
  if (found) {
    index--;
  } else {
    index = -1;
  }
  
  return index;
}

module.exports = employees;