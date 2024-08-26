//Merge Sort

//Time Complexity - O (Log n)
//Expected Auxilary space - O(n)
//approach - Divide and conquer algorithm
// merge arguments : arr , left(l), mid(m) , right(r) 

let arr= [9,8,7,5,4,3,2,1]
//sorted should be  - [1,2,3,4,5,7,8,9]

//1. Divide the array to partitions - 2 halfs
    //find the mid point by taking averge -
    //divide the elements till the partitions has one element.
//2. merge partitions

//1. partition 2 half then 4 halfs then again 8 half till elements count =1s
// 2. then merge 8's sorted arrays to 4s , then 4s arrays to 2s sorted again then single array which s sorted.

//recursion function
function mergeSort(arr ,l ,r)
{   
    //at least 2 elements 
    //partitionaing
    if(l<r)
    {
        let mid = Math.floor((l+r)/2)

        //divide the arrays into 2 parts 1st then again thru recursion , 
        //again divide till u get 1 element
        mergeSort(arr,l,mid)
        mergeSort(arr,mid+1,r)

        //to merge divided arrays
        merge(arr,l,mid,r)
    }
}

function merge(arr , l ,mid,r)
{
   let arr1len = mid- l+1 //3 5 6 9  , so 3-0 +1 = 4 left starting is 0 ,so take 1 as 1st element. if mid is 6 , 6-1 =5 elements 

   let arr2len = r - mid; //1 2 7 8
   
   //3 5 6 9  1 2 7 8

   let a;
   let b;
   
   for(i=0;i<arr1len;i++)
   {
        a[i] = arr[l+i] //left array l=0 +1 = 1
   }

   for(i=0;i<arr2len;i++)
   {
        b[i] = arr[mid+1 +i]
   }




}

