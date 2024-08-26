// let array = [2,3,4,5,6,7,8]
// let target = 7
// let left = 0;
// let right = array.length-1
// while(left<=right){
// let mid = Math.floor((left+right)/2)
// if(array[mid]===target){
//     console.log(mid);
//     break;
// }else if(array[mid]<target){
//     left = mid+1
// }else{
//     right = mid-1
// }
// }


function binary(arr, low, high, value) {

    if(high >= low) {
        mid = Math.floor((low + high)/2)

        if(arr[mid] === value) { 
            return mid 
        }

        if(arr[mid] > value) {
            return binary(arr, low, mid-1, value)
        } 
            return binary(arr, mid+1, high, value)
        
    }
    return -1
}

let low = 0;
let array1 = [1, 2, 3, 4, 5]
let high = array1.length-1;
console.log(binary(array1, low, high, 5))



function binarySearch(array,target){
    let left = 0;
    let right = array.length-1
    function binary(array,left,right,target){
        if(left<=right){
            let mid = Math.floor((left+right)/2)
            if(array[mid]===target){
               return mid
            }else if(array[mid]<target){
                return binary(array,mid+1,right,target)
            }else{

                return binary(array,left,mid-1,target)
            }
        }
        return -1
    }
    
    return binary(array, left, right, target);
}


let arrayBin = [1,2,3,4,5,6]
console.log(binarySearch(arrayBin,5))