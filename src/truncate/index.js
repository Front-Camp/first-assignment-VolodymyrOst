/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  let result;
  if ((length>str.length) || (str.length==0))
  {
	  result = str;	  
  }
  else
  {
    if (length!=0){
	  let numberOfLetters = length-replacer.length;
    let subString = str.substring(0,numberOfLetters);
    result = subString+replacer;
    }
    else
      {
      let numberOfLetters = str.length-replacer.length;
    let subString = str.substring(0,numberOfLetters);
    result = subString+replacer;  
        
        
      }
	  
  }
    return result;
};
};

export default truncate;
