/**
 * Write a function that does count down
 */

// Iterative approach
// const countDown = (num) => {
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
// }
// Recursive Approach
const countDown = (num)=> {
    // base case 
    if(num == 10 ){
        return;
    }
    // recursion
    countDown(num + 1);
    console.log(num)
}
countDown(0);