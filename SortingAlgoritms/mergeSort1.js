// https://www.youtube.com/watch?v=-qjc4fYsZTU
function mergeSort(arr , noofElements)
{
    if(arr.length < 2) //base case to leave out  the recursion
    {
        return 
    }

    let mid = Math.floor(noofElements /2)  //2.5 if 5 counts - so 2
    console.log(mid)

    let   leftArr =[] ;
    let rightArr =[];
    //fill up left partition
    for(i=0;i<mid ; i++)
    {
        leftArr[i] =   arr[i]
    }
    console.log(mid)
    //fill up right partition
    for(i=mid;i<noofElements ; i++)
    {
        rightArr[i-mid] =  arr[i]  //imp :[i-mid] =0
    }

    console.log(leftArr)
    console.log(rightArr)

     mergeSort(leftArr,mid) // [8] -leftArr, [5]- rightArr
     mergeSort(rightArr,noofElements-mid) // [8] -leftArr, [5]- rightArr
     merging(arr,leftArr,rightArr,mid,noofElements-mid)
}

function merging(arr,leftArr,rightArr,left,right)
{

    let i=0,j=0;k=0;

    

}


let arr1 = [8,5,-2,20,-6]
mergeSort(arr1 , 5)
