//bubble

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<(arr.length-1);j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]= temp
//             }
//         }
//     }
//     console.log(arr);
// }

// let arr = [32,12,23,54,6,98,87,9]
// bubbleSort(arr)


//merge

// function merge(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor((arr.length)/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return mergeSort(merge(left),merge(right))
// }
// function mergeSort(left,right){
//     const sorted =[];
//     while(left.length && right.length){
//         if(left[0]>right[0]){
//             sorted.push(right.shift())
//         }else {
//             sorted.push(left.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// let arr =[32,12,23,54,6,98,87,9]
// console.log(merge(arr));


//quicksort


// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot = arr[0]
//     let left = []
//     let right=[]
//     let equal=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             equal.push(arr[i])
//         }
//     }
//     return[...quickSort(left),...quickSort(equal),...quickSort(right)]
// }

// let arr = [32,12,23,54,6,98,87,9]
// console.log(quickSort(arr));


//insertionSort

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j= i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]= arr[j]
//             j=j-1
//         }
//         arr[j+1] = key
//     }
//     return arr;
// }
// let arr = [32,12,23,54,6,98,87,9]
// console.log(insertionSort(arr));

//selectionSort

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     return arr;
// }
// let arr = [32,12,23,54,6,98,87,9]
// console.log(selectionSort(arr));




// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr;
// }


// let arr = [32,12,23,54,45,34]
// console.log(bubbleSort(arr));


// function mergeSort(arr){
//          if(arr.length<2){
//             return arr;
//          }
//          let mid = Math.floor(arr.length/2)
//          let left = arr.slice(0,mid)
//          let right = arr.slice(mid)

//          return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
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

// let arr = [23,12,32,65,43,56]
// console.log(mergeSort(arr));


// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot = arr[Math.floor(arr.length/2)]
//     let left =[]
//     let equal =[]
//     let right =[]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             equal.push(arr[i])
//         }
//     }
//     return [...quickSort(left),...equal,...quickSort(right)]
// }


// let arr = [23,12,32,65,43,56]
// console.log(quickSort(arr));


// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i ;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min =j;
//             }
//         }
//        [ arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     console.log(arr);
// }

// let arr = [23,12,32,65,43,56]
// selectionSort(arr);

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j=i-1;
//         while(j>=0&&arr[j]>key){
//             arr[j+1] = arr[j]
//             j=j-1;
//         }
//         arr[j+1]=key
//     }
// }
// let arr = [23,12,32,65,43,56]
// insertionSort(arr);
// console.log(arr);



//stack

// class Stack{
//     constructor(){
//         this.items = []
//     }
//     isEmpty(){
//         return this.items.length===0;
//     }

//     push(data){
//         this.items.push(data)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "underflow"
//         }
//         return this.items.pop();
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "underflow"
//         }
//         return this.items[this.items.length-1]
//     }
//     print(){
//         let str = ''
//         for(let i=0;i<this.items.length;i++){
//             str+=this.items[i]+' '
//         }
//         return str;
//     }
    
   
// }




// function sorted(stack,element){
//     if(stack.isEmpty() || element>stack.peek()){
//         stack.push(element)
//     }else{
//         let temp = stack.pop()
//         sorted(stack,element)
//         stack.push(temp)
//     }
// }
// function sortStack(stack){
//     if(!stack.isEmpty()){
//         let temp = stack.pop()
//         sortStack(stack)
//         sorted(stack,temp)
//     }
// }



// const stack = new Stack();
// stack.push(12)
// stack.push(15)
// console.log(stack.peek());
// stack.push(14)
// stack.push(13)

// console.log(stack.print())
// sortStack(stack)
// console.log(stack.print())



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
//         if(!this.isEmpty()){
//             node.next = this.top
//         }
//         this.top = node;
//     }

//     pop(){
//         if(this.isEmpty()){
//             return "Underflow"
//         }
//         let removed = this.top
//         this.top = this.top.next
//         return removed.data;
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "The stack is empty"
//         }
//         return this.top.data
//     }

//     print(){
//         let str =''
//         let curr = this.top
//         while(curr!=null){
//            str+=curr.data+ ' '
//            curr = curr.next 
//         }
//         console.log(str);
//     }
//     isEmpty(){
//         return this.top===null
//     }
//     reverse(){
//         let prev = null
//         let curr = this.top
//         let next = null
//         while(curr!=null){
//             next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.top = prev
//     }

//     exisitng(data){
//         let curr = this.top 
//         while(curr.data!=data){
//             curr = curr.next;
//         }
//         return true;
//     }

// }
// function sorting(stack,element){
//             if(stack.isEmpty()|| element<stack.peek()){
//                 stack.push(element)
//             }else{
//                let temp = stack.pop()
//                sorting(stack,element) 
//                 stack.push(temp)
//             }
// }
// function sort(stack){
//          if(!stack.isEmpty()){
//             let temp = stack.pop()
//             sort(stack)
//             sorting(stack,temp)
//          }
// }

// // function primeNumber(stack){
// //        let curr = stack.peek()
// //        while(curr!=null){
// //         if(curr.data<=1){
// //             return false;
// //         }
// //         for(let i=2;i<=Math.sqrt(curr.data);i++){
// //             if(curr.data%i === 0){
// //                 return false;
// //             }
// //             curr = curr.next
// //         }
        
// //         return true;
        
// //        }
// // }


// function prime(num){
//     if(num<=1){
//         return false
//     }
//     for(let i=2;i<= Math.sqrt(num);i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }

// function primeNumber(stack){
//     let curr = stack.top;
//     while(curr!=null){
//         if(prime(curr.data)){
//             console.log(`${curr.data} is a prime`);
//         }
//         curr = curr.next;
//     }
// }



// const stack = new Stack()
// stack.push(89)
// stack.push(34)
// stack.push(14)
// stack.push(54)
// stack.push(24)
// // stack.print()
// // console.log(stack.pop())
// // stack.reverse()
// // stack.print()

// // console.log(stack.exisitng(54))
// // sort(stack);
// stack.print()
// primeNumber(stack)


// class Queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(data){
//         this.items.push(data)
//     }
//     dequeue(){
//         if(this.items.front = null){
//             return "underflow"
//         }
//         this.items.shift()
//     }
//     peek(){
//         return this.items[0]
//     }
//     print(){
//         let str =''
//         if(this.items){
//             for(let i=0;i<this.items.length;i++){
//                 str += this.items[i]+' '
//             }
//             return str;
//         }
//     }
// }


// const queue = new Queue()
// queue.enqueue(12)
// queue.enqueue(22)
// queue.enqueue(32)
// console.log(queue.print())
// console.log(queue.peek())
// queue.dequeue()
// console.log(queue.print())



// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null
//         this.rear = null
//     }
//     isEmpty(){
//         return this.front === null
//     }

//     enqueue(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.front = this.rear = node
//         }
//         this.rear.next = node
//         this.rear = node
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "Underflow"
//         }
//         let remove = this.front
//         this.front = remove.next
//         return remove.data
//     }
//     frontElement(){
//         return this.front.data
//     }
//     print(){
//         let str =''
//         let curr = this.front
//         while(curr){
//             str += curr.data +' '
//             curr = curr.next
//         }
//         return str.trim(' ')
//     }
// }

// const queue = new Queue()
// queue.enqueue(21)
// queue.enqueue(25)
// queue.enqueue(23)
// console.log(queue.print());
// console.log(queue.dequeue())
// console.log(queue.frontElement());


//bubbleEort

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]= temp
//             }
//         }
//     }
//     return arr;
// }

// let arr = [23,12,2,43,54,45]
// console.log(bubbleSort(arr));


//mergeSort
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2)
//     let left =arr.slice(0,mid)
//     let right= arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
// let sorted = []
// while(left.length&&right.length){
//     if(left[0]>right[0]){
//         sorted.push(right.shift())
//     }else {
//         sorted.push(left.shift())
//     }
// }
// return [...sorted,...left,...right]
// }
// let arr = [23,12,2,43,54,45]
// console.log(mergeSort(arr));


//quickSort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//  let pivot = arr[Math.floor(arr.length/2)]
//  let left=[]
//  let equal = []
//  let right = []

// for(i=0;i<arr.length;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else if(arr[i]>pivot){
//         right.push(arr[i])
//     }else{
//         equal.push(arr[i])
//     }

// }
// return [...quickSort(left),...equal,...quickSort(right)]
// }
// let arr = [23,12,2,43,54,45]
// console.log(quickSort(arr));

//SelectionSort
// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//     let  min = i
//     for(j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min =j
//         }
     
//     }
//     [arr[i],arr[min]] = [arr[min],arr[i]]
// }
// console.log(arr);
// }
// let arr = [23,12,2,43,54,45]
// selection(arr)


//insertion sort

// function insertion (arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=key
//     }
//     return arr;
// }
// let arr = [23,12,2,43,54,45]
// console.log(insertion(arr));

//stack 

// class Stack{
//     constructor(){
//         this.items = [];
//     }

//     push(data){
//         this.items.push(data);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "underflow"
//         }
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     print(){
//         let str =[]
//         for(let i=0;i<this.items.length;i++){
//             str+= this.items[i]+ ' '
//         }
//         console.log(str);
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
// }

   

// function sorted(stack,element){
//     if(stack.isEmpty()||element>stack.peek()){
//         stack.push(element)
//     }else{
//     let temp = stack.pop()
//     sorted(stack,element)
//     stack.push(temp)}
// }
// function sortStack(stack){
//     if(!stack.isEmpty()){
//         let temp = stack.pop()
//         sortStack(stack)
//         sorted(stack,temp)
//     }
// }
// const stack = new Stack()
// stack.push(23)
// stack.push(43)
// stack.push(33)
// stack.push(63)
// stack.print()
// console.log(stack.peek())
// console.log(stack.pop());
// stack.print()
// sortStack(stack)
// stack.print()



//stack using LL


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
//             this.top= node;
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "UNderflow"
//         }else{
//             let remove = this.top
//             this.top = remove.next
//             console.log(remove.data);
//         }
//     }
//     peek(){
//         return this.top.data;
//     }
//     isEmpty(){
//         return this.top === null
//     }
//     print(){
//         let str = ''
//         let curr = this.top
//         while(curr){
//             str+=curr.data + ' '
//             curr = curr.next
//         }
//         return str
//     }
//     reverse(){
//         let curr = this.top
//         let next = null
//         let prev = null
//         while(curr){
//             next = curr.next
//             curr.next = prev
//             prev=curr
//             curr = next
//         }
//         this.top = prev
//     }
//  duplicate(){
//     let curr = this.top
//     let prev = null
//     let temp = new Set();
//     while(curr!== null){
//        if(!temp.has(curr.data)){
//         temp.add(curr.data);
//         prev = curr
//        }else{
//         prev.next = curr.next
//        }
//        curr = curr.next
//     }
// }
// }

// const stack = new Stack();
// stack.push(43)
// stack.push(53)
// stack.push(63)
// stack.push(23)
// stack.push(63)
// stack.push(23)
// console.log(stack.print());
// // stack.pop()
// // console.log(stack.print());
// // console.log(stack.peek());
// // console.log(stack.print());
// // stack.reverse();
// // console.log(stack.print());
// stack.duplicate()
// console.log(stack.print());

// class Queue{
//      constructor(){
//         this.items =[]
//      }

//      enqueue(data){
//             this.items.push(data)
//      }
//      dequeue(){
//         if(this.items.length===0){
//             return "Underflow"
//         }
//         this.items.shift();
//      }
//      frontElemenet(){
//         return this.items[0]
//      }
//      print(){
//         let str = ''
//         for(let i=0;i<this.items.length;i++){
//             str += this.items[i]+ ' '
//         }
//         console.log(str);
//      }
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(19)
// queue.enqueue(17)
// queue.print();
// queue.dequeue()
// queue.print();
// console.log(queue.frontElemenet())



