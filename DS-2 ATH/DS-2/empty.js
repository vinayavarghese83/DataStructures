// class hashable{
//     constructor(size=7){
//         this.table = new Array(size)
//     }

//     hash(key){
//         let hash =0;
//         for(let i=0;i<key.length;i++){
//             hash+=key.charCodeAt(i)%this.table.length
//         }
//         return hash;
//     }


//     //seperte chainig

//     set(key,value){
//         let index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=[]
//         }
//         this.table[index].push([key,value])
//         return this
//     }

//     //linear probing

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index]!==undefined){
//             index=(index+1)%this.table.length
//         }
//         this.table[index]=[key,value]
//         return this;
//     }

//     //quadratic probing

//     set(key,value){
//         let index =this.hash(key)
//         let i =1;
//         while(this.table[index]!==undefined){
//             index - (index+i*i)%this.table.length
//             i++;
//         }
//         this.table[index]=[key,value]
//         return this;
//     }


//     get (key){
//         let index = this.hash(key)
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

//     values(){
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

// let myhashtable = new hashable()
// myhashtable.set('tea',70)
// myhashtable.set('eat',50)
// myhashtable.set('ate',1400)
// console.log(myhashtable.keys());
// // console.log(myhashtable.values());
// console.log(myhashtable)






// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(j=0;j<(arr.length-1);j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] =arr[j+1]
//                 arr[j+1]= temp
//             }
//         }
//     }
//     console.log(arr);
// }


// function selectionSort(arr){
//     let min;
//     for(i=0;i<arr.length;i++){
//         min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min])
//             {
//                 min =j
//             }
//         }
//        [ arr[i],arr[min] ]=[ arr[min],arr[i]]
//     }
//     console.log(arr);
// }


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j=i-1
//         while(j>=0 &&arr[j]>key){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1]=key
//     }
//     console.log(arr);
// }



function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    const sorted =[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

let arr =[32,1,2433,43,12]
console.log(mergeSort(arr))
// insertionSort(arr)
// selectionSort(arr)
// bubbleSort(arr)


















