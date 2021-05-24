


function findingCharacteres(stringInput, charactere){

    //to find the number of repetitions 
    
    var re = new RegExp(charactere, 'g');
    var counting = stringInput.match(re);
    var numberCount = counting.length

    
    //to count in groups

    var charactereGroup = charactere+'*'; 
    var reGroup = new RegExp(charactereGroup, 'g');
    var countingGroup = stringInput.match(reGroup);

    console.log(countingGroup);  //where is repetition it will fill with i(argument which where are looking for), otherwise it will be empty


    var numberOfGroups = 0

    for (var i=0; i<countingGroup.length;i++){
        if(countingGroup[i]!==''){
            numberOfGroups = numberOfGroups+1;
        }

    }
    
    return ('groups = ' + numberOfGroups +' / count: '+ numberCount);
    
};

console.log(findingCharacteres("Mississipi","i"));