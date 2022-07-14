/*
* Given a set of integers, the task is to divide it \
* into two sets S1 and S2 such that the absolute difference between their sums is minimum.
* If there is a set S with n elements, then if we assume Subset1 has
* m elements, Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2))
* should be minimum.
*/

const arr = [1,2,7];
const sum = arr.reduce((a,b) => a+b, 0)
const n = arr.length;

const minSubSetDiff = (arr, range, sumUntilNow, n) => {
    // if we get to the end of the element
    if(n==0){
        return Math.abs(range - 2*(sumUntilNow));
    }
    return Math.min(minSubSetDiff(arr, range, sumUntilNow, n-1), minSubSetDiff(arr, range, sumUntilNow + arr[n-1], n-1))
}
console.log(minSubSetDiff(arr, sum, 0, n));