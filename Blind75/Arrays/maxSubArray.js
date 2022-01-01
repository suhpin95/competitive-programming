/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var max = nums[0];
    var sum = 0;
	// loop over the array 
    for (var i = 0; i < nums.length; i++) {
	// add by increasing the window size
        sum += nums[i];
    // Get the max value    
		max = Math.max(sum,max)
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};