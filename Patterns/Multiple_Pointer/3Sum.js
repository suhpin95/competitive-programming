/**
 * Write a function that would pick 3 elements from array whose sum is equal to 0. Return an Array
 */

const ThreSum = (nums) =>{
    // sort array
    nums = nums.sort((a,b)=>a - b);
    let result = [];
    let left, right, sum;
    // use concept of 2 pointer on every ith element
    for (var i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i-1])continue
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            // check the sum 
            sum = nums[left] + nums[right] + nums[i]
            if (sum === 0) {
                // push the data
                result.push([nums[i], nums[left], nums[right]])
                
                //remove the repition
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
            if (sum < 0) {
                left++;
            }
            if (sum > 0) {
                right--;
            }
        }
    }
    return result;
}

console.log(ThreSum([-1, 0, 1, 2, -1, -4]))