class MinHeap{
    constructor() {
        this.heap =[]
    }
    getParentindex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        // console.log(this.heap)
        this.heapifyUp()
        console.log(this.heap)
    }
    heapifyUp(){
        let index = this.heap.length-1
        // console.log(index)
        while(index >0 ){
            let parentIndex = this.getParentindex(index)
            if(this.heap[parentIndex]>this.heap[index]){
                this.swap(parentIndex,index)
                index = parentIndex
            }else{
                break
            }
        }
    }
    removeMin(){

        if(this.heap.length==0){
            return null
        }

        if(this.heap.length==1){
            return this.heap.pop()
        }

        const min = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifyDown(0)

        return min
    }

    heapifyDown(index){
        let lelfChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)
        let smallerchildIndex = index
        if(lelfChildIndex<this.heap.length && this.heap[lelfChildIndex]<this.heap[smallerchildIndex]){
            smallerchildIndex = lelfChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[smallerchildIndex]){
            smallerchildIndex = rightChildIndex
        }
        if(index !== smallerchildIndex){
            this.swap(index,smallerchildIndex)
            this.heapifyDown(smallerchildIndex)
        }
    }
    heapSort(){
        let sortArray = []
        while(this.heap.length>0){
            sortArray.push(this.removeMin())
        }
        return sortArray
    }

}

const myHeap = new MinHeap()
// myHeap.insert(10)

myHeap.insert(10)
myHeap.insert(7)
myHeap.insert(3)
myHeap.insert(8)
myHeap.insert(20)
console.log("maxHeap",myHeap.heap)
console.log("sorted" ,myHeap.heapSort())