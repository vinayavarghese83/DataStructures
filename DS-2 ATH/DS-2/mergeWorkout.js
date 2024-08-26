//Question 1: Merge  Sort in acsending order
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     const sorted = []
//    while(left.length&&right.length){
//     if(left[0]<right[0]){
//         sorted.push(left.shift())
//     }else{
//         sorted.push(right.shift())
//     }
//     }
//     return [...sorted,...left,...right]

// }

// let arr = [38, 27, 43, 3, 9, 82, 10]
// console.log(mergeSort(arr));


//Question 2: Strings sorting using merge sort

// function merge(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     const mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
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

// let arr = ['kiwi','orange','plum','apple','banana']
// console.log(merge(arr));

//Question 3:MergeSort in descending order

// function merge(arr){
//     if(arr.length < 2){
//         return arr;
//     }
//     const mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     let sorted = []
//     while(left.length&&right.length){
//         if(left[0]>right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }


// let arr = [43,12,65,45,87,9,34]
// console.log(merge(arr));
