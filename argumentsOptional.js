let checkNumber = function ( elem ) {
    if (typeof (elem) == typeof(2) ) {
        return true;
    } else
        return false;
}

function addTogether(a , b) {
    
    
    // For two or more arguments
    if ( arguments.length > 1) {
        if ( checkNumber(arguments[0]) && checkNumber(arguments[1]) ) {
            return arguments[0] + arguments[1];
        }
        else
            return undefined;
    } else if ( arguments.length == 1 && checkNumber(arguments[0]) ) {
        return function (b) {
            if (checkNumber(b)) {
                return a + b;
            } else
                return undefined;
        }
    }
    return undefined;
}

console.log ( addTogether("http://bit.ly/IqT6zt") );