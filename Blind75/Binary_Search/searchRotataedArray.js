/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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
    // target is somewhere in the left or right side of the array
        if(nums[left] < nums[mid]){
            if(target > nums[left] && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(target > nums[right] && target < nums[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};