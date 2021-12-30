/**
 * Write a function that would calculate the factorial of a give number
 */

// const factorial = (nums) => {
//     var result = 1
//     for(var i = 1; i <= nums; i++ ){
//         result *= i;
//     }
//     console.log(result);
// }
const factorial = (nums) =>{
    if(nums === 0 )return 1;
    return factorial(nums - 1) * nums;
}

console.log(factorial(5));