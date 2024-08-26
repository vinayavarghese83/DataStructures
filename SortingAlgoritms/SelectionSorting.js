//selection Sort
//same liek old Sorting checking with 1st elemet with all 
//and get the least one's index as min-index in two loops.
//finally after inner loop swap it to first and then forward checking


//logic - 2 for loop , i=0 , next loop j=i+1
//save i index first as min_index and traverse the inner loop and get min-index the least index 
//finally after the 2nd loop finishes , swap i & min_index values.
// [arr[i],arr[min-index]]   = [arr[min-index],arr[i]]


function SelectionSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {

        let min_index = i;
        for(j=i+1;j<arr.length;j++)
        {
                if(arr[j] < arr[min_index])
                {
                    min_index = j
                }
        }

        //swap
          [arr[i],arr[min_index]]  =[arr[min_index],arr[i]]  

          console.log(arr)
    }
}

SelectionSort([8,20,-2,4,-6])


