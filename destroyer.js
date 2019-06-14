function destroyer(arr) {
    // Remove all the values
  
    let newArr = [];  
    let compArr = arguments[0];
    delete arguments[0];
  
    for( let i = 1 ; i < arguments.length ; i++){
      newArr.push(arguments[i]);
    }
  
    //compArr = the array tcdo be compared, newArr = remaining Array
  
    let smallArr = newArr;
    let bigArr = compArr;
  
    if( newArr.length > compArr.length){
      smallArr = compArr;
      bigArr = newArr;
    }
    let retArr = [];
    
    //console.log( smallArr , "===", bigArr)
    smallArr.filter( function(item){
      for( let i = bigArr.length - 1; i >= 0 ; i--){
        if( item == bigArr[i]){
          bigArr.splice(i , 1);
        }
      }
      return true;
    })
  
    console.log(bigArr);
  
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
  