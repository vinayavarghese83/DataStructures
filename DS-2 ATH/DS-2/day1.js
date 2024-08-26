//Bubble

// function bubble(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr;
// }

// let arr = [32,23,12,43,34,1]
// console.log(bubble(arr))


//Merge

// function merge(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right = arr.slice(mid)
//      return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     let sorted = []
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// let arr = [32,23,12,43,34,1]
// console.log(merge(arr));


//Quick sort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }else{
//         let pivot = Math.floor(arr.length/2)
//         let left = []
//         let right =[]
//         let equal =[]
//         for(i=0;i<arr.length;i++){
//             if(arr[i]<arr[pivot]){
//                 left.push(arr[i])
//             }else if(arr[i]>arr[pivot]){
//                 right.push(arr[i])
//             }else{
//                 equal.push(arr[i])
//             }
//         }
//         return [...quickSort(left),...equal,...quickSort(right)]
//     }
    
// }

// let arr = [32,23,12,43,34,1]
// console.log(quickSort(arr));


//insertion

// function insertion(arr){
//      for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = key
//      }
// }

// let arr = [32,23,12,43,34,1]
// insertion(arr);
// console.log(arr);

//selection

// function selection(arr){
//     for(i=0;i<arr.length;i++){
//         let min = i
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     console.log(arr);
// }
// let arr = [32,23,12,43,34,1]
// selection(arr)


//stack

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.top = null
//     }
//     push(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "Underflow"
//         }else{
//             let remove = this.top
//             this.top = remove.next
//             return remove.data
//         } 
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "Stack empty"
//         }else{
//             return this.top.data
//         }
//     }
//     isEmpty(){
//         return this.top===null
//     }
//     print(){
//         let str = ''
//         let curr = this.top
//         while(curr){
//             str += curr.data + ' '
//             curr = curr.next
//         }
//         console.log(str);
//     }
//     reverse(){
//         let curr = this.top
//         let next = null
//         let prev = null
//         while(curr){
//             next = curr.next
//             curr.next =prev
//             prev =curr
//             curr = next
//         }
//         this.top = prev
//     }
// }
// function sorted(stack,element){
//     if(stack.isEmpty()||element>stack.peek()){
//         stack.push(element)
//     }else{
//         let temp = stack.pop()
//         sorted(stack,element)
//         stack.push(temp)
//     }
// }

// function sort(stack){
//     if(!stack.isEmpty()){
//         let temp = stack.pop()
//         sort(stack)
//         sorted(stack,temp)
//     }
// }



// const stack = new Stack()
// stack.push(12)
// stack.push(2)
// stack.push(42)
// stack.push(22)
// stack.push(3)
// // stack.print()
// // console.log(stack.pop())
// // console.log(stack.peek());
// stack.print()
// sort(stack);
// stack.print()
// stack.reverse()
// stack.print()


//queue

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(data) {
//         const node = new Node(data);
//         if (this.isEmpty()) {
//             this.front = this.rear = node;
//         } else {
//             this.rear.next = node;
//             this.rear = node;
//         }
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         } else {
//             let remove = this.front;
//             this.front = this.front.next;
//             if (this.front === null) {
//                 this.rear = null;
//             }
//             return remove.data;
//         }
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.front.data;
//     }

//     print() {
//         let str = '';
//         let curr = this.front;
//         while (curr) {
//             str += curr.data + ' ';
//             curr = curr.next;
//         }
//         console.log(str.trim());
//     }

//     isEmpty() {
//         return this.front === null;
//     }
// }

// function sortedInsert(queue, element) {
//     if (queue.isEmpty() || element <= queue.peek()) {
//         queue.enqueue(element);
//     } else {
//         let temp = queue.dequeue();
//         sortedInsert(queue, element);
//         queue.enqueue(temp);
//     }
// }

// function sortQueue(queue) {
//     if (!queue.isEmpty()) {
//         let temp = queue.dequeue();
//         sortQueue(queue);
//         sortedInsert(queue, temp);
//     }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(18);
// queue.enqueue(12);
// queue.enqueue(15);
// queue.enqueue(11);

// console.log("Original queue:");
// queue.print(); // Output: 18 12 15 11

// sortQueue(queue);

// console.log("After sorting:");
// queue.print(); // Expected Output: 11 12 15 18


//hashtable

class HashTable{
    constructor(size=7){
        this.table = new Array(size)
    }
    hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash += (key.charCodeAt(i))%this.table.length
        }
        return hash
    }
    set (key,value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key,value])
    }
    set(key,value){
        let index = this.hash(key)
        while(this.table[index]!==undefined){
            index = (index+1)%this.table.length
        }
        this.table[index] = [key,value]
        return this
    }
    set(key,value){
        let index = this.hash(key)
        let i=1
        while()
    }
}