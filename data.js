var employees = {
  items: [],
  add: function(Id, Name, Surname, Level, Salary) {
    
    if (isNaN(Id)) {
      var max = 0;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id > max) {
          max = this.items[i].id;
        }
      }
      
      Id = max + 1;
    }
    
    if (!isNaN(Level) && !isNan(Salary)) {
      
      // check if the id already exists
      // if yes, overwrite !!! this function can be used
      // also for updating employees
      var idFound = false;
      var index = 0;
      while (!idFound && index < this.items.length) {
        idFound = (this.items[index].id == Id);
        index++;
      }
      
      if (idFound) {
        index--;
      }
      
      var e = {
        id: Id,
        name: Name,
        surname: Surname,
        level: Level,
        salary: Salary
      };
      
      this.items[index] = e;
      
      return index;
    }
    
    return -1;
  },
  get: function(Id) {
    
    var e = {
      id: "",
      name: "",
      surname: "",
      level: "",
      salary: ""
    };
    
    if (!isNaN(Id)) {
      var idFound = false;
      var i = 0;
      
      while (!idFound && i < this.items.length) {
        idFound = (this.items[i].id == Id);
        i++;
      }
      
      if (idFound) {
        e = this.items[--i];
      }
    }
    
    return e;
  }
}