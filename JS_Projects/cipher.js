function cipher (alpha) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let decodedPosiOfAlpha = alphabets.indexOf(alpha) - 13;

    if (decodedPosiOfAlpha < 0) {
        decodedPosiOfAlpha = 26 + decodedPosiOfAlpha;
    }

    return alphabets[decodedPosiOfAlpha];

}
function rot13(str) { // LBH QVQ VG!
  
    let decodedString = "";
    for ( let i = 0 ; i < str.length ; i++) {

        if( str [i].match(/[A-Z]/)){
            decodedString += cipher(str[i]);
        } else {
            decodedString += str[i];
        }
    }

    console.log(decodedString);

    return decodedString;
    
    
}


rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");