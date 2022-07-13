/**
 * Given an array arr[] of
 * length N and an integer X,
 * the task is to find the number
 * of subsets with a sum equal to X.
 */

const arr = [1, 2, 3, 3];
const n = arr.length;
const target = 6;

const countSubSet = (arr, target, n) => {
    if(n == 0)return (target == 0 ? 1 : 0);
    if(arr[n-1] <= target){
        return (countSubSet(arr, target-arr[n-1], n-1) + countSubSet(arr, target, n-1));
    } else{
        return countSubSet(arr, target, n-1);
    }
}
console.log((countSubSet(arr, target, n)));