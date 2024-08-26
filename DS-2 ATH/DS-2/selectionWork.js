//Question 1: Simple selection Sort in ascending 

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
//     console.log(arr);
// }
// let arr = [65,34,23,54,76,12,11]
// selectionSort(arr)


//Question 2: Selection in descending

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]>arr[min]){
//                 min = j;
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     console.log(arr);
// }
// let arr = [89,65,98,45,90,23,43]
// selectionSort(arr)

//Question 3: Sorting array of strings

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    console.log(arr);
}

let arr = ['mango','apple','grapes','plum','banana']
selectionSort(arr);