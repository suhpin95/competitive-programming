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
    const dp = new Array(str1.length + 1).fill(-1).map( _=> new Array(str2.length + 1).fill(-1));
    const recurse = (strlen1, strlen2,) => {
        if(strlen1 == 0 || strlen2 == 0)return 0;
        if(dp[strlen1][strlen2] != -1)return dp[strlen1][strlen2]
        if(str1[strlen1 - 1] === str2[strlen2 - 1]){
            return dp[strlen1][strlen2] = recurse(strlen1 - 1, strlen2 - 1);
        }
        return dp[strlen1][strlen2] =  1 + Math.min(recurse(strlen1-1, strlen2), recurse(strlen1, strlen2-1 ))
    }
    let strlen1 = str1.length, strlen2 = str2.length
    recurse(strlen1, strlen2);
    return dp[strlen1][strlen2];
}
console.log(lcs(string1, string2, lenStr1, lenStr2));
