/**
 * Calculate the minimum number of multiplication required 
 * for Matrix multiplication
 */

const MCM= (array) => {
    const solve = (left, right, arr) => {
        let result = Number.MAX_VALUE;
        if(left == right){
            return 0;
        }
        for(let k = left; k < right; k++){
            let tempAns = solve(left, k, arr)+solve(k + 1, right, arr) + arr[left - 1] * arr[k] * arr[right];
            if (tempAns < result) {
                result = tempAns;
            }
        }
        return result;
    }
    let result = solve(1, array.length - 1, array)
    return result;
}

const dpMCM = (arr) => {
    const n = arr.length;
    let dp = new Array(n + 1).fill(-1).map( _ => new Array(n + 1).fill(-1));
    const solve = (left, right, arr) => {
        let result = Number.MAX_VALUE;
        if(left >= right){
            return 0;
        }
        if(dp[left][right] != -1)return dp[left][right];
        for(let k = left; k < right; k++){
            let tempAns = solve(left, k, arr) 
                        + solve(k + 1, right, arr) 
                        + (arr[left-1] * arr[k] * arr[right] );
            if(tempAns < result){
                result = tempAns;
            }
        }
        return dp[left][right] = result;
    }
    solve(1, arr.length - 1, arr);    
    return dp[n][n];
}

const palindromePartitioning = (str) => {
    let left = 0 ;
    let right = str.length - 1;
    const solve= (left, right, str) => {
        let result = Number.MAX_SAFE_INTEGER;
        if(left >= right ){
            return 0;
        }
        // checks if the partition creates a palindorme and return 0 if true as we don't 
        // need further partition
        if(isPalindrome(left, right, str)){
            return 0
        }
        for(let k = left; k < right; k++){
            let temp = solve(left, k, str) + solve(k + 1, right, str) + 1;
            result = Math.min(result, temp);
        }
        return result;
    }
    function isPalindrome(left, right, str){
        while(left < right){
            if(str[left] != str[right])return false;
            left++;
            right--;
        }
        return true
    }
    return solve(left, right, str);
}
console.log(palindromePartitioning("aab"));