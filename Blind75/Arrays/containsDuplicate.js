/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // appraoch
    let ht= {};
    // loop thorugh nums declare hashtable and 
    for(var i = 0; i < nums.length; i++){
        // store the count of all the variables
        ht[nums[i]] = (ht[nums[i]]|| 0)+1
    }
     // loop through the property of hashTable
    for(var num in ht){
         // and if count greater than 1 then return false  
        if(ht[num] > 1)return true;
    }
    return false;
};