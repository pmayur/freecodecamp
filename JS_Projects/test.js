function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function change ( num ) {
    let currency = [ 100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01 ]

    let i = 0
    let change = [];

    while ( num != 0) {
        if ( num - currency[i] < 0) {
            i ++ ;
        } else {
            num = roundToTwo(num - currency[i]);
            change.push(currency[i]);
        }
    }

    console.log (change);
}

change( 95.26 );