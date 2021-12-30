// minsubarray that adds to target in the array

var nums = [2,3,1,2,1,4,2]

// const minSubSum = (arr, target)=>{
//     var len = arr.length, min = Infinity;
//     for(var i = 0; i < len; i++){
//        var count = 0, sum = 0;
//        for(j = i; j < len; j++){
//             sum += arr[j];
//             count++;
//             if(sum >= target) min = Math.min(min, count);
//        }
//    }

//    console.log( (min === Infinity) ? 0: min)

// }
// minSubSum(nums, 7)

var slidingWindowSum = (arr, target) => {
    var start = 0, end = 0, len = Infinity;
    var sum = 0;
    while(start< nums.length){
        if (sum < target) {
            sum += arr[start];
            start++;
        } else if (sum >= target) {
            sum -= arr[end];
            len = Math.min(len, start - end);
            end++;
        } else break;
    }
    console.log(len);
}

slidingWindowSum(nums, 7);

