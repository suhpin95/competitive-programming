class QuickSelect{
    constructor(k){
        this._data = []
        this.k = k;
    }


    quickSelect(left, right){
        let pivotVal = this._data[right];
        let pivotIdx = left;
        for(let i= left; i < right; i++){
            if(pivotVal > this._data[i]){
                [this._data[pivotIdx],this._data[i]] = [this._data[i], this._data[pivotIdx]];
                pivotIdx++;
            }
        }
        [this._data[pivotIdx], this._data[right]] = [this._data[right], this._data[pivotIdx]];
        if(pivotIdx > this.k) {
            return this.quickSelect(left, pivotIdx-1);
        }
        else if(pivotIdx < this.k) {
            return this.quickSelect(pivotIdx+1, right);
        }
        else{
            return this._data[pivotIdx];
        }

    }

    addElement(value){
        this._data.push(value);
    }

    findKthLargestElement(){
        this.k = this._data.length - this.k;
        let left = 0, right = this._data.length-1;
        return this.quickSelect(left, right)
    }

    get Data(){
        return this._data;
    }
}

let performQuickSelect = new QuickSelect(2);
performQuickSelect.addElement(4);
performQuickSelect.addElement(1);
performQuickSelect.addElement(3);
performQuickSelect.addElement(4);
performQuickSelect.addElement(5);
performQuickSelect.addElement(8)
performQuickSelect.addElement(10)
performQuickSelect.addElement(9)

let arr = performQuickSelect.Data

console.log(performQuickSelect.findKthLargestElement(arr));