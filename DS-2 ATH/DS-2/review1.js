// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }else{

//         let pivot = Math.floor(arr.length/2)
//         let left =[]
//         let equal =[]
//         let right =[]
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
    




// let arr = [43,23,34,12,65,2]
// console.log(quickSort(arr));


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
//             this.top= node
//         }
//     }
//     isEmpty(){
//         return this.top===null
//     }
//     print(){
//         let str =''
//         let curr = this.top
//         while(curr){
//             str += curr.data +' '
//             curr = curr.next
//         }
//         console.log(str);
//     }
//     pop(){
//         let remove = this.top
//         this.top = remove.next
// }
// peek(){
//     return this.top.data
// }

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
//     let temp = stack.pop()
//     if(!stack.isEmpty()){
//         sort(stack)
//         sorted(stack,temp)
//     }
// }


// const stack = new Stack()
// stack.push(32)
// stack.push(12)
// stack.push(22)
// stack.push(92)
// stack.push(2)
// stack.print()
// console.log(stack.peek())
// stack.pop()
// stack.print()
// sort(stack)
// stack.print()



class HashTable{
    constructor(size = 7){
        this.table = new Array(size)
    }


    hash(key){
        let index =0;
        for(let i=0;i<key.length;i++){
            index += (key.charCodeAt(i))%this.table.length
        }
        return index;
    }


    set(key,value){
         let index = this.hash(key)
         if(this.table[index]!==undefined){
            index = (index+1)%this.table.length
         }
         this.table[index] = [key,value]
    }


    removeDup(){
        let hashtable = []
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
            for(let j=0;j<this.table[i].length;j++){
                if(this.table[i][j][1]!=undefined && !hashtable.includes(this.table[i][j][1])){
                    hashtable.push(this.table[i][j][1])
                }else{
                    this.table[i][j].splice(1,1)
                }
            }}
        }
    }
    keys(){
        for(let i=0;i<this.table.length;i++){
            for(let j=0;j<this.table[i];j++){
                if(this.table[i][j]!==undefined){
                    return this.table[i][j][1]
                }
            }
        }
    }


}


const hashtab = new HashTable()
hashtab.set('apple',32)
hashtab.set('plum',43)
hashtab.set('banan',23)
hashtab.set('ade',32)
hashtab.set('erer',41)
hashtab.removeDup()
hashtab.keys()