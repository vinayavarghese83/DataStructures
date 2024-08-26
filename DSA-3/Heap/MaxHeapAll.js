class MaxHeap{
    constructor()
    {
        this.heap = [];
    }

    getParentIndex(childIndex)
    {
        return Math.floor((childIndex -1) /2 )
    }

    getLeftChildIndex(parentIndex)
    {
        return  2* parentIndex +1 
    }
   
    getRightChildIndex(parentIndex)
    {
        return  2* parentIndex  + 2 
    }
    
    Swap(i , j)
    {
        [this.heap[i] ,this.heap[j] ] = [this.heap[j] ,this.heap[i] ] 
    }

    heapifyUp() //insert  
    {
        //1. check last CBT's last element 
        //2. find this the last element's parentIndex
        //3. compare the child and parent greater or not.
        //4. if child is greater he last element , then swap it and make it up
        //5.  make index -= parent element and repeat while loop ,ese break;
        //6. you get the max element in root 
        let lastIndex = this.heap.length-1;
        while(lastIndex > 0 )  
        {
               let parentIndex  =  this.getParentIndex(lastIndex)
               if(this.heap[parentIndex] < this.heap[lastIndex])
               {
                 this.Swap(parentIndex,lastIndex) 
                 lastIndex =  parentIndex
               }
               else
               {
                 break;
               }
        }  
    }

    insert(value)
    {
        // let lastIndex = this.heap.lenclsgth;
        this.heap.push(value)
        // console.log(this.heap)
        this.heapifyUp()
        console.log(this.heap)
    }

    heapifyDown(parentIndex)
    {
        let leftChildrenIndex = this.getLeftChildIndex(parentIndex)
        let rightChildIndex = this.getRightChildIndex(parentIndex)
        let smallerchildIndex = parentIndex

        if(this.heap[leftChildrenIndex] > this.heap[smallerchildIndex] )
        {
            parentIndex  = leftChildrenIndex
        }
        if(this.heap[rightChildIndex] > this.heap[smallerchildIndex] )
        {
            parentIndex  = rightChildIndex
        }

        if(smallerchildIndex!== parentIndex)
        {
            this.Swap(smallerchildIndex,parentIndex)
        //    console.log("after swap : ,", this.heap)
            this.heapifyDown(smallerchildIndex)
        }
    }
    removeMax()
    {
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length==1){
            return this.heap.pop()
        }

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return max
        }

    heapSort()
    {
        let sortedArray = []
        while(this.heap.length>0){
            let node = this.removeMax()
            // console.log(node)
            sortedArray.push(node)
        }
        return sortedArray
    }
}

const myHeap = new MaxHeap()

myHeap.insert(10)
myHeap.insert(7)
myHeap.insert(3)
myHeap.insert(8)
myHeap.insert(20)
console.log("maxHeap",myHeap.heap)
console.log("sorted" ,myHeap.heapSort())



