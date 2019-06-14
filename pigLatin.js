function translatePigLatin(str) {
   
    if( str[0].match(/[a|e|i|o|u]/i)){
        return str.concat("way");
    } else {
        let toAppend = str.match(/[^a|e|i|o|u]*/i);
        str = str.replace(str.match(/[^a|e|i|o|u]*/i), "");
        return (str.concat(toAppend[0].concat("ay")));
    }
}
  
  translatePigLatin("consonant");