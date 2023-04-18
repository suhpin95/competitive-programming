/**
 * 
 */
class MergeSort{
    
    constructor(arr){
        this._data = arr;
    }
    // divide and conquer
    mergeSort = (low, high) => {
        if(low > high){
            return this._data;
        }
        let mid = Math.floor((high + low) / 2);
        this.mergeSort(low, mid);
        this.mergeSort(mid + 1, high);
        this._data = this.merge(this._data, low, high);
    }
    // sort the "sorted element"
    merge = (arr, low, high) =>{
        if(arr.length <= 1){
            return arr;
        }
        let idx1 = 0, idx2 = 0;
        let result = [];
        while(idx1 < left && idx2 < right){
            if(arr[idx1] <= arr[idx2]){
                result[idx1] = arr[idx1];
                idx1++;
            } else {
                result[idx2] = arr[idx2];
                idx2++;
            }
        }
        while(idx1 < left){
            result[idx1] = arr[idx1];
            idx1++;
        }
        while(idx2 < right){
            result[idx2] = arr[idx2];
            idx2++;
        }
        return result;
    }
}

let arr = [-1, 10, 7, 1, 9, 8, 5 ];
let sort = new MergeSort(arr);
arr = sort.mergeSort(0, arr.length);
console.log(arr);
