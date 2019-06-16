
// this function expands the array from a lower limit to upper limit
function expandArray (arr) {

    let expansion = [];
    let small = arr[0];
    let big = arr[1];

    if ( arr[0] > arr[1] ) {
        big = arr[0];
        small = arr[1];
    }

    for ( let i = small ; i <= big ; i++) {
        expansion.push(i);
    }

    return expansion;
}

// this function reverses the array
function reverseArray (arr) {

    let revArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    return revArr;
}

// checkDiv checks if num is divisble by elem
function checkDiv (num, elem) {
    if ( num % elem == 0) {
        return true;
    } else
        return false;
}


function smallestCommons(arr) {

    let theArray = reverseArray( expandArray (arr) ); //the expanded array in descending order


    // count is created to keep track of number of elements divisible by product variable, which is multiple of the biggest element in the expanded array
    // product is a multiple of biggest element of the expanded array
    let count = 1, product = 1; 


    // this loops keeps running till it does not get all the elements divisible by a number which count keeps track
    for ( let i = 1; count != theArray.length; i++ ) {
        count = 1; 
        product = theArray[0] * i; // product contains multiples of the largest number in the expanded array
        


        // this loop checks if the product is divisible by other members of the array
        // flag variable is just to cut the loop if it finds even one element in array not divisble by array
        for ( let j = 1, flag = true; j < theArray.length && flag == true; j++) {

            if( checkDiv (product , theArray[j])) {
                count ++;
                flag = true;
            } else
                flag = false;
        }


    }
    
    console.log( product );   
    return product; 
}
  
  
smallestCommons([1,5]);
smallestCommons([2, 10]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);