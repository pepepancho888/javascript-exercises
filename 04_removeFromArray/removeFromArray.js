const removeFromArray = function(originalArray,...itemsToRemove) {
    let position ='';
    for(let j=0;j<itemsToRemove.length;j++) {
        for(let i=0;i<originalArray.length;i++) {
            if (itemsToRemove[j] === originalArray[i]) {
                position = i;
                let beforeValues = originalArray.slice(0,position);
                let afterValues = originalArray.slice(position + 1);
                originalArray = beforeValues.concat(afterValues);
            }
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
