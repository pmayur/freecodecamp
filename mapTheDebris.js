function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var avgAlt = 35873.5553;
    let retArr = [];

    function deleteAvgAlt (obj) {
        delete obj.avgAlt;
        return obj;
    }

    function calcOrbitalPeriod ( avgAlt ) {
        var T = 2 * Math.PI * Math.sqrt ( Math.pow (earthRadius + avgAlt, 3)/ GM );
        return Math.round(T);
    }
    
    for (let i = 0 ; i < arr.length ; i++) {
        arr[i].orbitalPeriod = calcOrbitalPeriod(arr[i].avgAlt);
        retArr.push(deleteAvgAlt(arr[i]));
    }

    return retArr;

  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);