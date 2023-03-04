/**
 * Edit Distance
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    const dp = new Array(len1 + 1).fill('').map( _ => new Array(len2 + 1).fill(""));
    const solve = (len1, len2) => {
        if(len1 == 0){
            return dp[len1][len2]= len2;
        }
        if(len2 == 0){
            return dp[len1][len2]=len1;
        }
        if(dp[len1][len2] != "")return dp[len1][len2];
        if(word1[len1 - 1] == word2[len2 - 1]){
            return dp[len1][len2] = solve(len1-1, len2-1)
        }
        return dp[len1][len2]= 1 + Math.min(solve(len1 - 1, len2), solve(len1, len2 - 1) , solve(len1 -1 , len2 -1));
    }  
    solve(len1,len2);
    return dp[len1][len2];
};
console.log(minDistance("s",""));