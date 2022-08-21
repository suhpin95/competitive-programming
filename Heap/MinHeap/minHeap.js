/**
 * This contains the ADT MinHeap
 * We have created this using array,
 * wherein we try to fit in the complete
 * binary Tree as an array.
 */

/**
 * Min heap is a complete binary tree with
 */

class Heap {
    constructor(size) {
        this.noOfNodes = 0;
        this.heapArr=new Array(size+1);
        this.heapArr[0] = 0;
    }

    insertion(val){
        this.noOfNodes++;
        // check if it meets the criteria of min heap
        if(this.noOfNodes >= this.heapArr.length){
            this.noOfNodes--;
            return 'Heap is full';
        }

        this.heapArr[this.noOfNodes] = val;
        let index = this.noOfNodes;
        let parent = index / 2;
        while(this.heapArr[index] <= this.heapArr[parent]){
            [this.heapArr[index], this.heapArr[parent]] = [this.heapArr[parent], this.heapArr[index]];
            index = parent;
            parent = index / 2;
        }

    }// insertion

    deletion(){
        this.noOfNodes--;
        // check swap nodes, check if it meets the criteria of the min heap
    }//deletion

    display(){
        console.log(this.heapArr)
    }


}

let minHeap = new Heap(10);
function _init(){
    minHeap.insertion(11)
    minHeap.insertion(12)
    minHeap.insertion(13)
    minHeap.insertion(14)
    minHeap.insertion(15)
    minHeap.insertion(16)
    minHeap.insertion(17)
    minHeap.insertion(10)
}
_init();
minHeap.display();