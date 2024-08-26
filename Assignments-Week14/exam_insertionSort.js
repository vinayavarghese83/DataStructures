

function insertion_sort(arr)
{
    let key 
   for(let i = 1 ; i<arr.length ;i++)
   {
      
       key = arr[i] 
        let j = i-1;
        
        while(j>=0 && arr[j] > arr[i] )
        {
            // [arr[i],arr[j]]  =  [arr[j],arr[i]] 

            arr[j+1] = arr[j]
           
            j--;
        }
        arr[j+1]  = key
   }
   return arr

}

const my_list = [64, 34, 25, 12, 22, 11, 90] 

console.log(insertion_sort(my_list))



