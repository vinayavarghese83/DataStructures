//Sorted &&  unsorted Array portions divide
//set i=1 , then traverse backward and check key 1thposition is smaller or not ,
// if so swap to the right in while loop and then 
//finally in ith position smaller will be there and swap with key to the 1st position.
//finally j will be -1 , so j+1 th position will be zeroth position

//Algorithm
// i=1 ,j=i-1   -> for loop-> key = arr[i] ; while (j>=0 && arr[j] > key) -> arr[j+1] = arr[j] , j-- ;after the loop , arr[j+1] = key

//Time complexity 
//Worst Case  : O-n2
//Average Case : O-n 
//Best Case : O-n

function insertionSort(arr)
{
    let i = 1;
    let key
    for( i=1; i<arr.length;i++)
    {
        key= arr[i]
        // console.log(key,i)
        let j = i-1;
        
        while ( j>=0 && arr[j] > key)
        {
            console.log("arr[j]" ,arr[j])
            arr[j+1]  = arr[j]
            j= j-1;
            console.log("arr[j+1] ,j" ,arr[j+1] , j)
        }
        arr[j+1]=key
    }
}

let arr = [8,20,-2,4,-6]
insertionSort(arr);
console.log(arr);






