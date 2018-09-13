/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  for (var i=0; i<=arr.length; i++){
    for (var j=0; j<=arr.length; j++)
      {
        if ((arr.indexOf(arr[i]))!=(arr.indexOf(arr[j])))
        {
          if (arr[i]+arr[j]==base)
            return [arr[i],arr[j]];
          	break;        
        }
      }  
  			}
};
};

export default twoSums;
