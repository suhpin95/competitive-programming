/**
 * Write a function to calculate the sum of 2 sub array 
 * which would hit the target
 */

var arr = [2,7,11,15];
const twoSum = (arr, target)=>{
    var sum = 0, start = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i] + arr[i-start + 1]
        if(sum == target){
            console.log(sum);
            return [i, i-start+1]
        }
    }
}
console.log(twoSum(arr, 18))