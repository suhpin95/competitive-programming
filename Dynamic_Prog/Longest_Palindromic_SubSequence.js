/**
Longest Palindromic Sub-sequence
Solve it like LCS
where first str is the given string
and the second one is the reverse of the first 
one
*/
const str1 = "GEEKSFORGEEKS";
const len1 = str1.length;
const str2 = str1.split('').reverse().join('');
const len2 = str2.length;
// let count = 0;
const dp = new Array(len1 + 1).fill(-1).map( _=> new Array(len2 + 1).fill(-1));

// initialization
for (let i = 0; i <= len1; i++){
    for(let j = 0; j <= len2; j++){
        if(i == 0 || j == 0){
            dp[i][j] = 0;
        }
    }
}
const LPS = (len1,len2)=>{
    if (len1 == 0 || len2 == 0)
        return 0;
    if(dp[len1][len2] != - 1)return dp[len1][len2];
    if (str1[len1 - 1] == str2[len2 - 1]) {
        return dp[len1][len2] = 1 + LPS(len1 - 1, len2 - 1);
    }
    return dp[len1][len2]=Math.max(LPS(len1, len2 - 1), LPS(len1 - 1, len2))
}
LPS(len1, len2);
console.log(dp[len1][len2])
