/**
 * Given a non-empty array nums containing only positive integers, 
 * find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal
 */

const arr = [1,5,6,1,11];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
const equalPartition = () =>{
    var isParition = false; 
    // we need to find the sum of all elements in the array 
    // then we need to get the 2 of the sum
    // we need to use this to check if it's even
    if( sum %2 === 0){
        isParition = subsetSum( (sum/2) , arr, arr.length - 1 );
    } 
        // it's not possible to fetch equal partition if it's even as we need can't divide the partition
        // in equal lengths
    return isParition;
}
console.log("Total",sum)

const dp = new Array(arr.length+1)
            .fill(0)
            .map(()=>new Array((sum / 2)+ 1).fill(0));
for(var i = 0 ; i < arr.length + 1; i++){
    dp[i][0] = true;
}
for(var i = 0 ; i < (sum/2) + 1; i++){
    dp[0][i] = false;
}

const subsetSum = (targetSum ,array, lengthOfArray) =>{
    if(lengthOfArray === 0)return false;
    if( targetSum === 0){
        return dp[lengthOfArray][targetSum] =  true;
    }
    if(dp[lengthOfArray - 1][targetSum] !== 0){
        return dp[lengthOfArray-1][targetSum]
    }
    if(array[lengthOfArray - 1] <= targetSum ){
        return dp[lengthOfArray ][targetSum] = 
                subsetSum(targetSum - array[lengthOfArray - 1], array, lengthOfArray - 1) 
                || 
                subsetSum(targetSum, array, lengthOfArray - 1)
    } else{
        return dp[lengthOfArray][targetSum]= subsetSum(targetSum, array, lengthOfArray - 1)
    }
}
console.log(equalPartition())
