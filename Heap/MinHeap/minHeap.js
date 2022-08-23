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
        this.heapArr=new Array(size);
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
        this.heapify()

    }// insertion

    heapify(){
        let index = this.noOfNodes;
        let parent = index / 2;
        while(this.heapArr[index] <= this.heapArr[parent]){
            [this.heapArr[index], this.heapArr[parent]] = [this.heapArr[parent], this.heapArr[index]];
            index = parent;
            parent = index / 2;
        }
    }

    deletion(){
        if(this.noOfNodes === 1)return 'No Elements to delete';

        // swap the last element as the top element
        [this.heapArr[1], this.heapArr[this.noOfNodes]] = [this.heapArr[this.noOfNodes], this.heapArr[1]];
         // removing the content
        this.heapArr[this.noOfNodes] = undefined;
        this.noOfNodes--;

        let index = 1
        do{
            let left = index * 2;
            let right = (index * 2) + 1;
            // check the lesser value of left and right and then
            // make that element as parent
            if(this.heapArr[index] > this.heapArr[left] || this.heapArr[index] > this.heapArr[right]) {
                if (this.heapArr[left] < this.heapArr[right]) { // right is greater
                    [this.heapArr[index], this.heapArr[left]] = [this.heapArr[left], this.heapArr[index]];
                    index = left;
                } else { //left is greater
                    [this.heapArr[index], this.heapArr[right]] = [this.heapArr[right], this.heapArr[index]];
                    index = right;
                }
            } else{
                break;
            }
        }while(index <= Math.floor(this.noOfNodes / 2) && index > 1)

    }//deletion

    display(){
        console.log(this.heapArr)
    }

    size(){
        return this.noOfNodes;
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

minHeap.deletion();
minHeap.display();
console.log("No of elements in the heap",minHeap.size())