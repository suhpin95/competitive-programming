/**
Minimum Deletion required to make a string as Palindrome.
String.length - len(LPS)
*/
const str1 = "geeksforgeeks";
const len1 = str1.length;
const str2 = str1.split('').reverse().join('');
const LPS = (len1, len2) => {
    if(len1 == 0 || len2 == 0)return 0;
    if(str1[len1-1] == str2[len2-1]){
        return 1 + LPS(len1 - 1, len2 - 1);
    } else {
        return Math.max(LPS(len1-1, len2), LPS(len1, len2 -1));
    }
}
const longest_palindromic_subsequence = LPS(len1, len1);
result = str1.length - longest_palindromic_subsequence;
console.log(result);
