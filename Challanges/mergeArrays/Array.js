
var ar1 = [1, 2, 3, 4, 5];
var ar2 = [5, 9, 6, 2];


function mergeExclusive(ar1,ar2){
    for (i=0; i< ar1.length;i++){
        if(ar2.includes(ar1[i])){
            var item = ar1[i];
            var index = ar2.indexOf(item);

            ar1.splice(i,1);  // 1 element= position // 2 element= amount
            ar2.splice(index,1);  // 1 element= position // 2 element= amount


        }
    }
    var concatenating = ar1.concat(ar2);

    return concatenating;


};

console.log(mergeExclusive(ar1,ar2));
   
    
