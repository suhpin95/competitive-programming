/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    //check the edge cases
    if(nums.length == 0)return nums[0];

    let left = 0,
        right = nums.length - 1;
    // basic binary search logic
    while (left <= right){
        let mid = Math.floor((left+right) / 2);
        if(target === nums[left])return left;
        if(target === nums[right])return right;
        if(target === nums[mid])return mid;

    // since rotated array we check if
    // possible ascending sort
        if(nums[left] < nums[mid]){
            // checks if the number is in the left half
            if(target > nums[left] && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // checks if the element is in the right half
            if(target < nums[right] && target > nums[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};