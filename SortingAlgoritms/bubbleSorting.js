//Question 1: Bubble sort - Sorting elements in ascending array

function bubbleSortAsc(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        // for(j=i+1;j<arr.length; j++)
        // {
        for(j=0;j<arr.length; j++)
        {
            // if(arr[j] < arr[i])
            // {
            //     [arr[i],arr[j]]= [arr[j],arr[i]]
            // }
            if(arr[j+1] < arr[j])
                {
                    [arr[i],arr[j]]= [arr[j],arr[i]]
                }
        }
        console.log(arr)
    }

}

let barray  = [8,20,-2,4,-6]
bubbleSortAsc(barray)