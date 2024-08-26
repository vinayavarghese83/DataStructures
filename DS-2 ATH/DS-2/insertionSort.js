// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         // let j = i-1

//         for(j=i-1;j>=0&&arr[j]>key;j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = key
//     }
//     return arr;
// }

// let arr = [43, 56, 23, 87, 12, 9, 3, 7];
// console.log(insertionSort(arr));



function insertionSort(arr){
   for(let i=1;i<arr.length;i++){
    let key = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j]
        j=j-1
    }
    arr[j+1]=key
   }
}


let arr = [8,20,-2,4,-6]
insertionSort(arr);
console.log(arr);

