function fearNotLetter(str) {
    let set = "abcdefghijklmnopqrstuvwxyz";

    let j = 0;
    for( let i = set.search(str[0]); i < set.search(str[str.length - 1]); i++){
        if( str[j] !== set[i]){
            console.log(set[i]);
            //return (set[i]);
        }
        j++;
    }

    return undefined;
}
  
fearNotLetter("abce");