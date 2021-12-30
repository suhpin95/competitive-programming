/**
 * Given a non-empty array nums containing only positive integers, 
 * find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal
 */

const arr = [1,5,12,5];

const equalPartition = () =>{
    var isParition = false, sum = 0;
    // we need to find the sum of all elements in the array 
    // then we need to get the 2 of the sum
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    // we need to use this to check if it's even
    if( sum %2 === 0){
        isParition = subsetSum( (sum/2) , arr, arr.length - 1 );
    } 
        // it's not possible to fetch equal partition if it's even as we need can't divide the partition
        // in equal lengths
    return isParition;
}
const subsetSum = (targetSum ,array, lengthOfArray) =>{
    if(lengthOfArray === 0)return false;
    if( targetSum === 0)return true;
    if(array[lengthOfArray - 1] <= targetSum ){
        return subsetSum(targetSum - array[lengthOfArray - 1], array, lengthOfArray - 1) 
                || 
                subsetSum(targetSum, array, lengthOfArray - 1)
    } else{
        return subsetSum(targetSum, array, lengthOfArray - 1)
    }
}
console.log(equalPartition())
