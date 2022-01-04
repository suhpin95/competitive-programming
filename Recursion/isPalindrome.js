/** This is optimized and we can use regEx to perform operations on String
 * 
 * @param {*} str 
 * @returns 
 */
let isPalindrome = (str) => {
    if(str.length < 2){
        return true;
    }
    // helper method
    const helperFunction = (string) => {
        if(string.length === 0){
            return ""
        } else {
           return helperFunction(string.slice(1)) + string.charAt(0);
        }
    }
    let newStr = helperFunction(str);
    return str == newStr ? true:false
}
console.log(isPalindrome('amma'));

isPalindrome = (str)=>{
    if(str.length === 0)return true;
    if(str[0] !== str[str.length - 1]){
        return false;
    }
    // slice(1,-1) would also work
    return isPalindrome(str.slice(1,str.length-1));
}
console.log(isPalindrome('amma'));