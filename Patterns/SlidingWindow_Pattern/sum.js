/**
 * sum of array elements using recursion
 */

var arr = [1,2,3,4,5];
// const arrSum = (arr) => {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
const arrSum = (num, length) => {
    if(length <= 0){
        return 0;
    }
    return (arrSum(num, length - 1) + num[length - 1]);
}
console.log(arrSum(arr, arr.length));

