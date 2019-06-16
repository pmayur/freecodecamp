function truthCheck(collection, pre) {
    // Is everyone being true?

    let flag = true; 
    collection.forEach(element => {
        if(!element[pre]) {
            flag = false;
            console.log(flag);
            return flag;
        }
    });
    console.log(flag);
    return flag;

}
  
  truthCheck([{"user": "Tinky-Winky", }, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");