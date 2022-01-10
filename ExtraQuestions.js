// var findNumbers = function(nums) {
//     // convert the nums to string
//     var tempArr = nums.toString().split(",")
//     var count = 0;
//     console.log(tempArr)
//     for(var i = 0; i<tempArr.length; i++){
//         if(tempArr[i].length % 2 === 0)count++
//     }
//     // compare the length and then give the count;
//     return count;
// };
// console.log(findNumbers([[12,345,2,6,7896]]))

/**
 * @param {number[]} arr
 * @return {boolean}
 */
//  var checkIfExist = function(arr) {
//     // use hashtable for searching 
//     var map = new Map();
//     for(var i  = 0; i < arr.length; i++){
//         map.set(arr[i], map.has(arr[i]) + 1 || 1);
//     }
//     console.log(map)
//     if(map.values(0) <= 1 && map.values(0)% 2 !== 0)return false
//     for(var key of map.keys()){
//        if(map.has(key / 2) || map.has(key * 2))return true
//     }
//     return false
// };

// console.log(checkIfExist([-2,0,10,10,-19,4,6,-8]))


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
//  var duplicateZeros = function(arr) {
//    // loop through the array
//    var Q = new Array();
//    for(var i = 0; i < arr.length; i++){
//        if(arr[i] === 0){
//            Q.push(0);
//            Q.push(0);
//        } else {
//            Q.push(arr[i])
//        }
//        arr[i] = Q.shift();
//    }
//    return arr;
//    // then use the Queue to fill in the data
// };
// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  // keep the values for m and n
  // use the last element from there decrement the value
  var right = m + n - 1;
  while(n > 0 && m > 0){ 
      
    if(nums1[m-1] < nums2[n-1]){
        nums1[right] = nums2[n-1]
        n--;
    } else {
        nums1[right] = nums1[m-1];
        m--;
    }
    right --;
  }
  // if the list remains 
  while(m > 0){
    nums1[m--] = nums1[right --];
  }
  while(n > 0){
    nums1[m-1] = nums2[n-1];
    n--;
    right--;
  }
  return nums1;
};
// console.log(merge([0],0,[1],1))

const deleteArr = (arr,val) => {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            arr[i] = arr[i+1]
            arr.length--;
        }
    }
    console.log(arr)
}
// deleteArr([1,2,3,4,5],4)
var nums = [1,1,2,]
const removeDuplicates = (nums) => {
    let hT = new Map();
    for(var num of nums){
        hT.set( num , hT.has(num) ?  hT.get(num)+1 : 1);
    }
    // convert the map to array
    nums = Array.from(hT).map(([key, value]) => (key))

    console.log(nums)
}
removeDuplicates(nums);