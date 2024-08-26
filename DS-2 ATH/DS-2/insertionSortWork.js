//Question 1: InsertionSort by using while and for loop in ascending order 
// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i]
//         let j= i-1;
//         while(j>=0&&arr[j]>key){
//             arr[j+1]= arr[j]
//             j=j-1
//         }
//         arr[j+1]= key
//     }

// }


// let arr = [17, 5, 21, 8, 13, 3, 11, 2]
// insertionSort(arr)
// console.log(arr);


//Question 2: Descending order

// function insertionSort(array){
//     for(let i=0;i<array.length;i++){
//         let key = array[i]
//         let j = i-1
//         while(j>=0&&array[j]<key){
//             array[j+1] = array[j]
//             j=j-1
//         }
//         array[j+1]=key
//     }
// }

// let array =[17, 5, 21, 8, 13, 3, 11, 2]
// insertionSort(array)
// console.log(array);

//Question 3: Count the number of shifts

// function insertionSort(arr){
//     let shift =0;
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1] = arr[j]
//             j=j-1
//             shift++;
//         }
//         arr[j+1]=key
//     }
//     console.log(shift);
// }

// let arr = [17, 5, 21, 8, 13, 3, 11, 2]
// insertionSort(arr)
// console.log(arr);


//Question 4:Array with strings
function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let key = arr[i]
        let j =i-1
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=key
    }
}

let array = ['orange','Apple','Mango','Banana','Grapes']
insertionSort(array)
console.log(array);