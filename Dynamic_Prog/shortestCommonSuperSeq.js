/**
We consider it to be the len of concated value of 2 string - len(LCS)
*/

const str1 = "abcdeh";
const str2 = "abfcehjk";

const len1 = str1.length;
const len2 = str2.length;

const dp = new Array(len1 + 1).fill(-1).map( _ => new Array(len2 + 1).fill(-1));

// initialization
for(let i = 0; i <= len1; i++){
    for(let j = 0; j <= len2; j++){
        if(i == 0 || j == 0)dp[i][j] = 0;
    }
}

const LCS = (len1, len2) => {
    if(len1 == 0 || len2 == 0)return 0;
    if(dp[len1][len2] !== -1)return dp[len1][len2];
    if( str1[len1 - 1] == str2[len2 - 1] ) {
        return dp[len1][len2] = 1 + LCS(len1-1, len2-1)
    } else {
        return dp[len1][len2] = Math.max(
            LCS(len1 - 1, len2),
            LCS(len1, len2 - 1)
        )
    }
}


LCS(len1,len2);
console.log(dp[len1][len2])
console.log("shortest common SubsSeq", (len1 + len2) - dp[len1][len2] )
