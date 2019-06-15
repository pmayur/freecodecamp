function sumFibs(num) {
    
    let sum = 0;
    let fibo = [1 , 1];
    let i = 1;

    // returns the fibonacci series till num in an array "fibo"
    while (sum <= num) {
        sum = fibo[ i - 1] + fibo [i];

        if( sum <= num){
            fibo.push(sum);
        }  

        i++;

    }

    // returns sum on all odd numbers in an array
    function addOdd (arr){
        
        let oddSum = 0;
        for (let i = 0; i < arr.length; i++) {

            if( arr[i] % 2 !== 0) {
                oddSum += arr[i];
            }
        }

        return oddSum;
    }
    
    return addOdd(fibo);
}
  
sumFibs(4);