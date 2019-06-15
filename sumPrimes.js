// returns true if the number is prime
function isPrime(elem) {

    let divisors = 0;
    for (let i = 1 ; i <= elem ; i++) {

        if ( elem % i == 0) {
            divisors++;
        }

        if ( divisors > 2) {
            return false;
        }
    }

    return true;
}




function sumPrimes(num) {
    
    let sum = 0;
    for ( let i = 2; i <= num; i++) {

        if ( isPrime(i) ){
            sum += i;
        }
    }

    console.log(sum);

    return sum;
}
  
sumPrimes(10);