//bubble Sorting

// function bubble(arr){
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

// let arr = [32,12,23,53,34,45]
// console.log(bubble(arr));

//merge Sort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))
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
// let arr = [302,102,203,503,304,405]
// console.log(mergeSort(arr));

//Quick

// function quickSort(arr){
//       if(arr.length<2){
//         return arr;
//       }

//       let pivot = Math.floor(arr.length/2)
//       let equal =[]
//       let right = []
//       let left =[]
//       for(let i=0;i<arr.length;i++){
//         if(arr[i]<arr[pivot]){
//             left.push(arr[i])
//         }else if(arr[i]>arr[pivot]){
//             right.push(arr[i])
//         }else{
//             equal.push(arr[i])
//         }
//       }
//       return [...quickSort(left),...equal,...quickSort(right)]
//     }
//     let arr = [302,102,203,503,304,405]
//     console.log(quickSort(arr));


//insertion 

// function insertion(arr){
//    for(let i=1;i<arr.length;i++){
//     let key = arr[i]
//     let j=i-1
//     while(j>=0&&arr[j]>key){
//         arr[j+1]=arr[j]
//         j=j-1
//     }
//     arr[j+1] = key

//    }
//    return arr;
// }

// let arr = [32,12,23,53,34,45]
// console.log(insertion(arr));


//selection 

// function selection(){
//     for (let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j+1]<arr[min]){
//                 min = j;
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     return arr;
// }
// let arr = [32,12,23,53,34,45]
// console.log(selection(arr));


//stack

// class Stack{
//     constructor(){
//         this.items=[]
//         this.top = null
//     }

//     push(data){
//         this.items.push(data)
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
//         let str = ''
//         for(let i=0;i<this.items.length;i++){
//             str+=this.items[i]+' '
//         }
//         console.log(str);
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
// }

// function sort(stack,element){
//     if(stack.isEmpty() || element>stack.peek()){
//         stack.push(element)
//     }else{
//         let temp = stack.pop()
//         sort(stack,element)
//         stack.push(temp)
//     }

// }
// function sorted(stack){
//     if(!stack.isEmpty()){
//     let temp = stack.pop()
//     sorted(stack);
//     sort(stack,temp)
// }
// }





// const stack = new Stack()
// stack.push(32)
// stack.push(12)
// stack.push(52)
// stack.print()
// console.log(stack.peek())
// console.log(stack.pop());
// sorted(stack)
// stack.print()


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
//         node.next = this.top
//         this.top = node
//     }
//     isEmpty(){
//         return this.top===null
//     }
//     pop(){
//         if (this.isEmpty()) {
//             console.log("Stack is empty");
//             return null;
//         }
//         let curr = this.top
//         this.top = curr.next
//         return curr.data;
//     }
//     peek(){
//         if (this.isEmpty()) {
//             console.log("Stack is empty");
//             return null;
//         }
//         return this.top.data
//     }
//     print(){
//         let str = ''
//         let curr = this.top
//         while(curr!=null){
//             str += curr.data + ' '
//             curr = curr.next
//         }
//         console.log(str);
//     }
// }

// function reverse(stack){
//     let next = null
//     let curr = stack.top
//     let prev = null
//     while(curr!=null){
//         next = curr.next
//         curr.next = prev
//         prev = curr
//         curr=next
//     }
//     stack.top = prev
// }

// function sorted(stack,element){
//     if(stack.isEmpty()||element<stack.peek()){
//         stack.push(element)
//     }else{
//         let temp = stack.pop()
//         sorted(stack,element)
//         stack.push(temp)
//     }
// }

// function sorting(stack){
//     if(!stack.isEmpty()){
//         let temp = stack.pop()
//         sorting(stack)
//         sorted(stack,temp)   
//     }
// }

// const stack = new Stack()
// stack.push(20)
// stack.push(30)
// stack.push(24)
// stack.push(33)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek());
// reverse(stack);
// console.log("Reversed Stack:");
// stack.print();
// sorting(stack)
// console.log("sorted");
// stack.print()


//Queue

// class Queue{
//     constructor(){
//         this.items = []
//         this.front = null
//         this.rear = null
//     }
//     enqueue(data){
//         this.items.push(data)
//     }
//     dequeue(){
//        if(this.isEmpty()){
//         return "Underflow"
//        } 
//        this.items.shift()
//     }

//     print(){
//         console.log(this.items.join(' '));
//     }
//     isEmpty(){
//         return this.items.lenth===0
//     }
// }


// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(30)
// queue.enqueue(20)
// queue.print()
// queue.dequeue()
// queue.print()


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

//     enqueue(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.front=this.rear=node;
//         }else{
//         this.rear.next = node
//         this.rear = node;
//     }
//     }
//     dequeue(){
//        if(this.isEmpty()){
//         return "Underflow"
//        }
//        const remove = this.front
//        this.front= this.front.next
//        return remove.data
//     }
//     isEmpty(){
//         return this.front===null
//     }
//     print(){
//         let str = ''
//         let curr = this.front
//         while(curr){
//             str += curr.data + ' '
//             curr = curr.next
//         }
//         console.log(str);
//     }
    
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.dequeue()
// queue.print()



// class HashTable{
//     constructor(size=7){
//         this.table= new Array(size)
//     }
//     hash(key){
//         let hash =0;
//         for(let i=0;i<key.length;i++){
//             hash += (key.charCodeAt(i))%this.table.length
//         }
//         return hash
//     }
//     // //seperate chaining
//     set(key,value){
//         let index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] =[]
//         }
//         this.table[index] = [key,value]
//         return this
//     }

//     //linear probing

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table!==undefined){
//             index = (index+1)%this.table.length
//         }
//         this.table[index]=[key,value]
//         return this
//     }

//     //quadratic

//     set(key,value){
//         let index = this.hash(key)
//         let i=1
//         while(this.table[index]!==undefined){
//             index = (index+i*i)%this.table.length
//             i++
//         }
//         this.table[index] = [key,value]
//         return this
//     }

//     get(key){
//         let index =this.hash(key)
//         if(this.table[index]){
//             for(let i=0;i<this.table[index].length;i++){
//                 if(this.table[index][i][0]==key){
//                     return this.table[index][i][1]
//                 }
//             }
//         }
//         return undefined
//     }
    
//     delete(key){
//         let index = this.hash(key)
//         if(this.table[index]){
//             for(let i=0;i<this.table[index].length;i++){
//                 if(this.table[index][i][0]==key){
//                     this.table[index].splice(i,1)
//                     return true
//                 }
//             }
//         }
//         return false
//     }


//     keys(){
//         let allkeys=[]
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 for(let j=0;j<this.table[i].length;j++){
//                     allkeys.push(this.table[i][j][0])
//                 }
//             }
//         }
//         return allkeys
//     }

//     value(){
//         let allvalues=[]
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 for(let j=0;j<this.table[i].length;j++){
//                     allvalues.push(this.table[i][j][1])
//                 }
//             }
//         }
//         return allvalues
//     }

// }

// let hashtable = new HashTable()
// hashtable.set('name','Athira')
// hashtable.set('age','23')
// hashtable.set('name','Arya')
// console.log(hashtable.keys());
// hashtable.get('name')
// console.log(hashtable.value());


class HashTable {
    constructor(size = 7) {
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    // Separate chaining
    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check if the key already exists and update it
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return this;
            }
        }
        this.table[index].push([key, value]);
        return this;
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    keys() {
        const allKeys = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    allKeys.push(this.table[i][j][0]);
                }
            }
        }
        return allKeys;
    }

    values() {
        const allValues = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    allValues.push(this.table[i][j][1]);
                }
            }
        }
        return allValues;
    }
}

const hashtable = new HashTable();
hashtable.set('name', 'Athira');
hashtable.set('age', '23');
hashtable.set('name', 'Arya');

console.log('Keys:', hashtable.keys());  // Output: ['name', 'age']
console.log('Value for key "name":', hashtable.get('name'));  // Output: 'Arya'
console.log('Values:', hashtable.values());  // Output: ['Arya', '23']
