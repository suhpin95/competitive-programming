/**
 * Longest Common Subsequence
 * */
let string1 = "AGGTAB";
let string2 = "GXTXAYB";

const lenStr1 = string1.length;
const lenStr2 = string2.length;

const dp = new Array(lenStr1+1).fill(-1).map( _=> new Array(lenStr2+1).fill(-1));

// Check the initialization

const lcs = (str1, str2, lenStr1, lenStr2) => {
    if(lenStr2 === 0 || lenStr1 === 0)return 0;
    if(dp[lenStr1][lenStr2] !== -1)return dp[lenStr1][lenStr2];
    if(str1.charAt(lenStr1-1) == str2.charAt(lenStr2-1)){
        return dp[lenStr1][lenStr2] = 1 + lcs(str1,str2, lenStr1-1, lenStr2-1);
    } else {
        return dp[lenStr1][lenStr2]=Math.max(lcs(str1, str2, lenStr1-1, lenStr2), lcs(str1, str2, lenStr1, lenStr2-1))
    }
}
lcs(string1, string2, lenStr1, lenStr2);
console.log(dp[lenStr1][lenStr2]);