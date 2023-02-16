/**
 * Min subset sum
 */

const minSubSet = () => {
    const arr = [1,2,7];
    const n = arr.length;
    const sum = arr.reduce((a,b) => a+b, 0);
    const dp = new Array(n + 1).fill(0).map(_ => new Array(sum + 1).fill(0));

    // init
    for(let row = 0; row < n + 1; row++){
        for(let col = 0 ; col < sum + 1; col++){
            if(row == 0){
                dp[row][col] = false
            }
            if(col == 0){
                dp[row][col] = true;
            }
        }
    }

    /** Subset sum problem logic here */
    const recurse = (index, sum, arr) => {
       if(index == 0)return false;
       if(sum == 0)return true;
       if(arr[index-1] <= sum){
        return (recurse(index-1, sum-arr[index-1], arr) || recurse(index-1, sum, arr))
       }else{
        return recurse(index-1, sum, arr);
       }
    }
    console.log(recurse(n, sum, arr));

}
// minSubSet();

/**
 * UnBounded knapsack
 */

const UnBoundedKnapSack = () => {
    const W = 100
    const val  = [1, 30]
    const wt = [1, 50]

    const recurse = (index, values, capacity, weights) => {
        if(index === 0 || capacity === 0){
            return 0;
        }
        if(weights[index - 1] <= capacity){
            return Math.max(values[index-1]+recurse(index, values, capacity - weights[index-1], weights), recurse(index - 1, values, capacity, weights) )
        } else{ 
            return(recurse(index - 1, values, capacity, weights))
        }
    }
    console.log(recurse(val.length, val, W, wt));
}
// UnBoundedKnapSack();

const rodcutting = () => {
    const arr = [1, 5, 8, 9, 10, 17, 17, 20];
    const val = arr.map( (val, index) => index+1 );
    
    const recurse = (index, capacity) => {
        if(index == 0){
            return arr[0];
        }
        if(index <=capacity){
            return Math.max(val[index-1]+recurse(index, capacity - arr[index-1]), recurse(index-1,capacity));
        } else{
            return recurse(index-1, capacity);
        }
    }
    return recurse(arr.length, arr.length);
}

const longestCommonSubSequence = (str1, str2) => {
    const dp = new Array(str1.length + 1).fill('').map( _=> new Array(str2.length + 1).fill(''));

    let strlen1 = str1.length, strlen2 = str2.length
    for(let i = 0 ; i < strlen1 + 1; i++){
        for(let j = 0; j < strlen2 + 1; j++){
            if(i == 0 || j == 0){
                dp[i][j] = 0;
            }
        }
    }

    const recurse = (strlen1, strlen2) => {
        for(let row = 1; row < strlen1 + 1; row++){
            for(let col = 1; col < strlen2 + 1; col++){
                if(str1[row-1] == str2[col-1]){
                    dp[row][col] = 1 + dp[row - 1][col - 1];
                } else {
                    dp[row][col] = Math.max(dp[row-1][col], dp[row][col-1]);
                }
            }
        }
    }
    
    recurse(strlen1, strlen2);
    return (dp[strlen1][strlen2])
}

const longestCommonSubString = (str1, str2) => {

    const len1 = str1.length;
    const len2 = str2.length
    let len = 0;
    const recurse =(len1, len2) => {
        if(len1 == 0 || len2 == 0)return;
        if(str1[len1] == str2[len2]){
            return len = Math.max(1 + recurse(len1-1, len2-1), len);
        } else{
            return 0;
        }
    }

    recurse(len1, len2);
    return len
}

console.log(longestCommonSubString("abefg", "abghf"));

