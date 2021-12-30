/**
 * "abcdemabbc"
 */
var str = "aabbbcdmear";

const maxLen = (str) => {
    var count = 0, maxLen = -Infinity, isBreak = false;
    for (var i = 0; i < str.length; i++){
        for(var j = i+1; j < str.length; j++){
            if(str[i] === str[j]){
                count = 0;
                isBreak = true;
            } else{
                count += 1;
                maxLen = Math.max(count,maxLen);
            }
            if(isBreak)break;
        }
    }
    console.log(maxLen)
}

const slidingWindow = (str) => {
    let seen = {};
    let longest = 0;
    let start = 0;
    // loop through the string
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        // if already present
        if(seen[char]){
            // start with the next char
            start = Math.max(start, seen[char]);
        }
        // get the longest
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    console.log(longest);
}

// maxLen(str);
slidingWindow(str)

