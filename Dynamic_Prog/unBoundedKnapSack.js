const profits = [10, 30, 20];
const weights = [5, 10, 15];
const W = 100;
const n = weights.length;


const dp = new Array(n + 1).fill(0).map( _ => new Array(W+1).fill(0) );
const knapSack = (weights, W, profits, n) => {
    if( n === 0){
        return 0;
    }
    if(dp[n][W] !== 0)return dp[n][W];
    if(weights[n-1] <= W){
        return dp[n][W] = Math.max(
            profits[n-1] + knapSack(weights, W - weights[n-1], profits , n),
            knapSack(weights, W , profits, n-1)
        )
    } else {
        return dp[n][W];
    }
}
console.log(knapSack(weights, W, profits, n))