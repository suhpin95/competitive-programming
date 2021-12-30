/**
 * Count no of elements in the list
 */
var arr = [1,2,3,4,5];
// var countElements = (arr) => {
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         count++;
//     }
//     console.log(count);
// }
var countElements = (arr,length,count) => {
    if(length < 1)return count;
    count ++;    
    return countElements(arr, length - 1, count);
}

console.log(countElements(arr,arr.length,0));