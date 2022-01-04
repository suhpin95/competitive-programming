/**
 * Write a function that would reverse a give string
 */

const reverString = (str) => {
    // base case
    if(str.length === 0){
        return "";
    }else {
        // can use substr function as well
        return reverString(str.slice(1)) + str.charAt(0);
    }
}
console.log(reverString("Suhas"))