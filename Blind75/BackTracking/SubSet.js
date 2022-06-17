/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const buffer = [];

    // backTracking
    const backTrack = (startIdx) => {
        if(startIdx >= nums.length){
            result.push([...buffer])
            return;
        }
        buffer.push(nums[startIdx]);
        backTrack(startIdx + 1);
        buffer.pop();
        backTrack(startIdx + 1);
    }
    backTrack(0);
    return result;
};
nums = [1,2,3]
console.log(subsets(nums));