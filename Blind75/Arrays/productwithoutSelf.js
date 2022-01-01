/**
 * @param {number[]} nums
 * @return {number[]}
//  */
//  var productExceptSelf = function(nums) {
//     // loop through the elements in the nums
//     var product = 1,result = [];
//     for(var i = 0; i < nums.length; i++){
//         // then loop next elements leaving the first element
//         for(var j = 0; j < nums.length; j++){
//             product *= nums[j]
//         }
//         result.push(product/nums[i]);
//         product = 1;
//     }
//     // we can store the product and return it
//     console.log(result)
// };


var productExceptSelf = (nums) => {
    /**
     * We need to use the concepts of prefix and postfix
     */
    // loop through the elements
    var prefix = 1, postFix = 1, result = [];
    for(var i =0; i < nums.length; i++){
        // store the prefix values by starting of with 1
        result[i] = prefix; 
        prefix *= nums[i];
    }
    // now since the prefix value is stored in the result
    // use that to calculate the new value
    for(var j = nums.length - 1; j>=0; j--){
        result[j] *= postFix;
        postFix *= nums[j]
    }
    console.log(result);
}


productExceptSelf([1,2,3,4])