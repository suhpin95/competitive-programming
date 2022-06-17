/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    const result = [];
    const buffer = [];

    const backTracking = (startIdx)=> {
        result.push([...buffer])
        for(let i = startIdx; i < nums.length; i++){
            if(nums[i] == nums[i-1] && i > startIdx)continue;
            buffer.push(nums[i]);
            backTracking(i + 1);
            buffer.pop();
        }
    }
    backTracking(0)
    return result;
};
nums = [1,2,2];
console.log(subsetsWithDup(nums))