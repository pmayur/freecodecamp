function dropElements(arr, func) {
    // Drop them elements.
    
    let retArr = [];
    
    for ( let i = 0 , flag = false ; i < arr.length ; i++) {

        if( func (arr[i])) {
            flag = true;
        }

        if (flag) {
            retArr.push(arr[i]);
        }
    }

    console.log(retArr);
    return retArr;
}
  
dropElements([0, 1, 0, 1], function(n) {return n === 1;});