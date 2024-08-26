// function selectionSort(arr){
//     for (let i=0;i<arr.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//     }
//     console.log(arr);
// }

// let arr = [64, 25, 12, 22, 11];
// selectionSort(arr)


function selection(arr){
    for(let i=0;i<arr.length;i++){
        let min =i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    console.log(arr);
}


let arr = [64, 25, 12, 22, 11];
selection(arr)
