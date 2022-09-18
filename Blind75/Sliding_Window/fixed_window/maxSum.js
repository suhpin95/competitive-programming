/**
 * Get the max summation of the array with a
 * fixed size of k
 * */
const windowSize = 3;
const arr = [1,10,4,5,6,7,1,23,12,223,421];
const getMaxSize= () => {
    let sum = 0;
    let maxSum = -Infinity;
    let j = 0;
    let i  = 0;
    while(j < arr.length){
        if(j-i + 1 <= windowSize){
            sum += arr[j];
            j++;
            maxSum = Math.max(sum, maxSum);
        } else{
            sum -= arr[i];
            i++;
        }
    }
    console.log(maxSum);
}
getMaxSize(arr, windowSize)
const getMinSum = () => {
    let startPtr = 0;
    let sum = 0;
    let minSum = Infinity;
    let endPtr = 0
    while(endPtr < arr.length){
        if(endPtr - startPtr + 1 <= windowSize){
            sum += arr[endPtr];
            endPtr++;
        } else {
            minSum = Math.min(sum, minSum);
            sum -= arr[startPtr];
            startPtr++;
        }
    }
    console.log(minSum)
}
getMinSum();