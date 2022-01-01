var twoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in ht) {
          return [ht[target - nums[i]], i];
        } else {
            // store the index
          ht[nums[i]] = i;
        }
    }
};