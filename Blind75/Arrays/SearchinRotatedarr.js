// 153. Find Minimum in Rotated Sorted Array

const findMin = (arr) => {
    // we need to use the concept of binary search
    // check the edge cases
    if(arr.length === 0)return -1;
    if(arr.length === 1)return arr[0];
    var left = 0, right = arr.length - 1;
    //check if the entire array is sorted
    if(arr[left] < arr[right]){
        return arr[left];
    }
    // skip the element as it is definetly larger
    left++;
    // binary search
    while(left <= right){
        var mid = Math.trunc((right + left)/ 2);
        // if mid is less which means the numbers are sorted in the right half
        if(arr[mid] > arr[right]){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        return arr[left]
    }

    // we need to adjust and understand the sorting of array
    // then use the pointers to return the index
   
}
const arr = [3,4,5,1,2];
console.log(findMin(arr))