/**
 * 0-1 KnapSack
 * Recursive Code
 */

const weights = [10, 20, 30];
const values = [60, 100, 120];
const n = values.length;
const W = 50;

// let knapSack = (Weights, weights, values, n) => {
//     if( n === 0 || Weights === 0 )return 0;
//     if(weights[n-1] > Weights){
//         return knapSack(Weights - weights[n-1], weights, values, n-1);
//     } else{
//         return Math.max(
//             values[n-1] + 
//             knapSack(Weights - weights[n-1], weights, values, n-1),
//             knapSack(Weights, weights, values, n-1) 
//         )
//     }
// }

// console.log(knapSack(W, weights, values, n))

/**
 * Top Down Approach DP
 */
// used for memoization
// const dp = new Array (n+1).fill(-1).map( it => Array(W+1).fill(-1)); 


//  var knapSack = (Weights, weights, values, n) => {
//     if(n === 0 || Weights === 0){
//         return 0 ;
//     }
//     if(weights[n-1] > Weights){
//         return dp[n][Weights] = knapSack(Weights, weights, values, n-1)
//     }
//     if(dp[n][Weights] !== -1) return dp[n][Weights]
//     if(weights[n-1] <= Weights) {
//         return dp[n][Weights] = Math.max( 
//             knapSack(Weights, weights, values, n-1) , 
//             values[n-1] + knapSack(Weights - weights[n-1], weights, values, n-1 ) 
//         );
//     }
//  }

const dp = new Array (n+1).fill(0).map( it => Array(W+1).fill(0)); 
const knapSack = (W, weights, val, n) => {
    // // Intialize the dp array;
    for(var i = 0; i < n + 1; i++){
        for(var j = 0; j < W + 1; j++){
            if(i === 0 || j === 0 ){
                dp[i][j] = 0;
            }
        }        
    } 
    // check the condition
    for(var i = 1; i < n + 1; i++){
        for(var j = 1; j < W + 1; j++){
            // use choice diagram
            if(weights[i-1] <= W){
                dp[i][j] = Math.max(
                    dp[i-1][j], 
                    val[i-1] + dp[i-1][j - weights[i-1]]
                )
            }else{
                dp[i][j] = dp[i-1][j]
            } 
        }
    }
    console.log("Solution",dp[n][W]);
}

knapSack(W, weights, values, n);