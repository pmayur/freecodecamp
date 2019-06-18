/* getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast) */


var Person = function(firstAndLast) {
    
    let name = firstAndLast;


    this.getFullName = function() {
      return name;
    };
    
    this.getFirstName = function() {
        return name.split(" ")[0];
    }

    this.getLastName = function() {
        return name.split(" ")[1];
    }

    this.setFirstName = function(first) {
        let f = name.split(" ");
        f[0] = first;
        name = f.join(" ");
    }

    this.setLastName = function(last) {
        let l = name.split(" ");
        l[1] = last;
        name = l.join(" ");
    }

    this.setFullName = function(firstAndLast) {
        name = firstAndLast;
    }



};
  
var bob = new Person('Bob Ross');
bob.getFullName();
