/**
 * Given a set of non-negative integers, 
 * and a value sum, determine if there 
 * is a subset of the given set with sum equal to given sum. 
 */
/**
 * Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
    Output: True  
    There is a subset (4, 5) with sum 9
 */

const arr = [3, 34, 4, 12, 5, 2];
target = 4236;
var dp = new Array(arr.length + 1)
            .fill(0)
            .map(() => new Array(target + 1).fill(0));
// set the initial value;
for(var i = 0 ; i < arr.length + 1; i++){
    dp[i][0] = true;
}
for(var i = 0 ; i < target + 1; i++){
    dp[0][i] = false;
}

// const subSet = (arr, target, lenArr) => {
//     if(lenArr === 0 )return false;
//     if(target === 0) {
//         return dp[lenArr][target] = true;
//     }
//     if(dp[lenArr - 1][target] != 0){
//         return dp[lenArr - 1][target]
//     }
//     if(arr[lenArr - 1] <= target){
//         return dp[lenArr][target] = subSet(arr, target - arr[lenArr - 1], lenArr - 1) || subSet(arr, target, lenArr  - 1);
//     } else {
//         return dp[lenArr][target] = subSet(arr, target, lenArr - 1);
//     }
// }

const dpSubSet = (arr, target, lenArr) => {
    for(var i = 1 ; i < arr.length + 1; i++){
        for(var j = 1; j < target + 1; j++){
            if(arr[lenArr - 1] <= j){
                dp[i][j] = (dp[i-1][j] || dp[i-1][j - arr[i-1]])
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[lenArr][target];
}

console.log(dpSubSet(arr, target, arr.length))