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

    let len1 = str1.length, len2 = str2.length
    for(let i = 0 ; i < len1 + 1; i++){
        for(let j = 0; j < len2 + 1; j++){
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
    
    recurse(len1, len2);
    
    let commonStr = "";
    while(len1 > 0 && len2 > 0){
        if(str1[len1] == str2[len2]){
            commonStr += str2[len2-1];
            len1--;
            len2--;
        } else {
            if(dp[len1 - 1][len2] > dp[len1][len2-1]){
                len1--;
            } else {
                len2--;
            }
        }
    }
    return commonStr.split("").reverse().join("");
}

const supersequence= (str1, str2) => {
    // lcs logic
    let len1 = str1.length;
    let len2 = str2.length;
    const dp = new Array(len1 + 1).fill("").map( _ => new Array(len2 + 1).fill(""));
    for(let i = 0; i < len1 + 1; i++){
        for(let j = 0; j < len2 + 1; j++){
            if(i == 0 || j==0){
                dp[i][j] = 0;
            }
        }
    }
    console.log(dp)
    const recurse = (len1, len2) => {
        for(let row = 1; row < len1+1; row++){
            for(let col = 1; col < len2 + 1; col++){
                if(str1[len1 -1] === str2[len2 - 1]){
                    dp[row][col] = 1 + dp[row-1][col-1];
                } else {
                    dp[row][col] = Math.max(dp[row-1][col], dp[row][col-1]);
                }      
            }
        }
        return dp[len1][len2]
    }
    let lcs = recurse(len1, len2);
    return (len1 + len2) - lcs
}
console.log(supersequence("abcdeh", "abfcehjk"))

// Minimum Number of Insertion and Deletion to convert String a to String b
var minDistance = function(word1, word2) {
    // perform lcs
    // this gives the length of the LCS string
    // then perform substraction from the first string with the lcs
    // then perform substraction from the LCS string with the string2

    let len1 = word1.length;
    let len2 = word2.length
    const LCS = (len1, len2) => {
        if(len1 === 0 || len2 === 0){
            return 0;
        }
        
    }
};