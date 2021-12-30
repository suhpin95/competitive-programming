/**
 * Write a function that calculates
 * max Product of subarray
 */

var arr = [1,2,-3,4,5,6];

const maxProd = (nums) => {
    var minProd = nums[0] , maxProd = nums[0], result = nums[0];
    // loop through the elements
    // check the min and max vals of prod
    for(var i = 0; i < nums.length; i++){
        // use previous values
        var tempMin = minProd;
        var tempMax = maxProd;
        // calculate the max and min prods 
        minProd = Math.min(nums[i], nums[i] * tempMin, nums[i] * tempMax)
        maxProd = Math.max(nums[i], nums[i] * tempMin, nums[i] * tempMax)
        // get the maxValue
        result = Math.max(minProd, maxProd);
    }
    console.log(result);
}
maxProd(arr);