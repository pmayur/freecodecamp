// acceptable: 10 , 11 , 13
// 10 = all digits = true
// 11 = 1st = 1 , rest 10 = digits = true
// 12 = 1st = ( , 5th = ) , rest all digits = true
// 13 = 1st = 1 , 2nd = ( 6th = ), rest all digits = true
function removeSpChars (str) {
    let retStr = "";

    for (let i = 0 ; i < str.length ; i++) {
        if ( str [i].match(/[0-9]|\(|\)/))
            retStr += str[i];
    }

    return retStr;
}
function removeCharAtPosi ( str , posi ) {
    let retStr = "";

    for (let i = 0; i < str.length; i++) {
        if ( i != posi )
            retStr += str[i];
    }

    return retStr;
}
function telephoneCheck(str) {

    if ( str.match(/^[1-9\(]+.+[1-9]$/) == null)
        return false;
    str = removeSpChars(str);

    if ( str.length < 10 || str.length > 13) {
        return false;
    }

    
    if ( str.length == 11 || str.length ==13 ) {
        if (str[0] != "1") {
            return false;
        } else
            str = removeCharAtPosi( str , 0);
    }


    if ( str.length == 12 ) {
        if( str[0] == "(")
            str = removeCharAtPosi ( str , 0 );
        if( str[3] == ")")
            str = removeCharAtPosi ( str , 3 );
    }


    if ( str.match (/^[1-9]{10}$/) == null)
        return false;
    else
        return true;
    
}

  
telephoneCheck("1-(555)-555-5555");