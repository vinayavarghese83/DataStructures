//Question 1: Quick Sort in ascending order
// function quickSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     const pivot = arr[Math.floor(arr.length/2)]
//     const left =[]
//     const right = []
//     const equal =[]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             equal.push(arr[i])
//         }
//     }
//     return [...quickSort(left),...quickSort(equal),...quickSort(right)]
// }

// let arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(quickSort(arr));


//Question 2: Quick Sort in descending order

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }

//     const pivot = arr[Math.floor(arr.length/2)]
//     const left = []
//     const right =[]
//     const equal = []

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else if(arr[i]<pivot){
//             right.push(arr[i])
//         }else{
//             equal.push(arr[i])
//         }
//     }
//     return [...quickSort(left),...quickSort(equal),...quickSort(right)]
// }

// let arr = [38, 27, 43, 3, 9, 82, 10];
// console.log("sorted",quickSort(arr));



//Question 3: QuickSort in strings

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     const pivot = arr[Math.floor(arr.length/2)]
//     const left =[]
//     const right =[]
//     const equal =[]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             equal.push(arr[i])
//         }
//     }
//     return [...quickSort(left),...quickSort(equal),...quickSort(right)]
// }

// let arr = ['kiwi','orange','apple','strawberry','banana']
// console.log(quickSort(arr));