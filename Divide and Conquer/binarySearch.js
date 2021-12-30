
var arr = [1,2,3,4,5,6,7,8,10];
const biSearch = (arr,key) => {
    var start= 0; end = arr.length - 1;
    while(end >= start) {
        var mid = Math.floor((start + end) / 2);
        if(arr[mid] === key){
            return mid;
        }  
        if(key > arr[mid]){
            start = mid + 1;
        } 
        if(key < arr[mid]) {
            end = mid - 1;
        }
    }
    return false;
}
const recursiveSearch = (arr, key, start, end) => {
    
    if(end >= start){
        var mid = start + Math.floor((end - start) / 2);
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === key) return mid;
        
        if( key > arr[mid]){
            start = mid + 1;
            return recursiveSearch(arr, key, start, end)   
        } else {
            end = mid - 1;
            return recursiveSearch(arr, key, start, end);
        }
        
    }
    return false;
   
}
var mid = Math.floor((0 + arr.length-1) / 2);
console.log(recursiveSearch(arr, -1, 0, arr.length - 1));
// console.log(biSearch(arr, 5));