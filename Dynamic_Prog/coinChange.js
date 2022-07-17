/**
 Find the number ways to get the particular value using different counts
 provided in coins array
 **/
const coins = [1, 5, 8];
const target = 8;
const n = coins.length;
const dp = new Array(n+1).fill(-1).map(_ => new Array(target + 1).fill(-1));
/// Initialize dp

for(let i = 0; i < target + 1; i ++){
    dp[0][i] = 0;
}
for(let i = 0; i< n+1; i++){
    dp[i][0] = 1;
}

const countOptions = (arr, target, n) => {
    if(n == 0)return 1;
    if(target <= 0)return 0;
    if(dp[n][target] != -1)return dp[n][target]

    if(coins[n-1] <= target){
        return dp[n][target]=(countOptions(arr, target - arr[n-1], n) + countOptions(arr, target, n-1));
    } else{
        return dp[n][target]=countOptions(arr, target, n-1);
    }
}
countOptions(coins, target, n)
console.log("Solution:",dp[n][target]);