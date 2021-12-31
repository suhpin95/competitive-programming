let nums = [1,2,5,2,8,-1,-5];

// const maxSubArr = (nums, count) => {
//     // 1. loop through each element in the array
//     var maxSum = -Infinity, sum = 0;
//     for (var i = 0; i < nums.length - count + 1; i++){
//         sum = 0;
//         for(var j = 0; j < count; j++){
//             // 2. then add the sum and store the max value
//             sum += nums[i+j];
//         }
//         // 3. compare the max value
//         maxSum = Math.max(maxSum, sum);
//     }
//     console.log(maxSum)
// }

// maxSubArr(nums, 2);

// const slidingWindowSum = (nums, count) => {
//     var maxSum = 0;
//     var tempSum = 0;

//     for(var i = 0; i < count; i++){
//         maxSum += nums[i];
//     }

//     tempSum = maxSum;

//     for(var i = count; i < nums.length; i++){
//         tempSum = tempSum - nums[i-count] + nums[i];
//         maxSum = Math.max(tempSum,maxSum)
//     }

//     console.log(maxSum);
    
// }

// // slidingWindowSum(nums, 2);

var maxSubArr = (nums) => {
    // approach
    var sum = 0;
    var maxSum = 0;
    // loop through all the elements
    for(var i = 0; i < nums.length ; i++){
        sum += nums[i];
         // store the max value
        maxSum = Math.max(sum, maxSum);
        // if the sum < 0 sum = 0
        if(sum < 0 ){
            sum  = 0;
        }
    }
}
maxSubArr(nums)