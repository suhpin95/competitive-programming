var subarraySum = function(nums, k) {
    var map = new Map();
    map.set(0,1);
    var sum = 0;
    var cnt = 0;
    for(var num of nums)
    {
        // calculate the sum
        sum += num;
        // check if it exists in the hashTable
        if(map.has(sum-k)){
            // increment the counter
           cnt += map.get(sum-k);
        }
        // set the sum to the the previous values or set the new one
        map.set(sum, map.has(sum)?map.get(sum)+1 : 1);
       console.log(map)
    }
    return cnt;
};
console.log(subarraySum([1,1,1],2))