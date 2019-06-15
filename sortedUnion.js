function uniteUnique(arr) {
    
    let args = [];
    let uni = [];
    
    // put all the argument in args
    {
        let i = 0;
        for (let itm in arguments){
            args.push(arguments[i]);
            i++;
        };
    }

    function isUniq(elem , arr){
        for (let i = 0; i < arr.length; i++){
            if(elem == arr[i])
                return true;
        }
        return false;
    }



    for ( let i = 0; i < args.length; i++){
        
        for( let j = 0; j < args[i].length; j++){
            
            if( !(isUniq (args[i][j] , uni)) ){
                uni.push(args[i][j]);
            }
            
        }
    }

    return uni;
    console.log(uni);

}
  
uniteUnique([1, 3, 2], [1, [5]], [2, [4]])