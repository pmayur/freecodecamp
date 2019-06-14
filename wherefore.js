function whatIsInAName(collection, source) {
 
    let collectionArr = Object.keys(collection);
    let sourceArr = Object.keys(source);

   let newArr = [];

    for( let j = 0; j < collection.length; j++){




        let count = 0;



        for( let i = 0 ; i < sourceArr.length ; i++){
        
            for(let item in collection[j]){
                
                if( item == sourceArr[i]){
                    if(collection[j][item] == source[sourceArr[i]]){
                        count ++;
                    }
                }
            }
        }
        if( count == sourceArr.length){
            newArr.push(collection[j]);
        }


        




    }


    console.log(newArr);    

  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
  
  //whatIsInAName( {"apple": 1, "bat": 2,"cat": 3 },{ "apple": 1, "bat": 2 });




//  ([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]