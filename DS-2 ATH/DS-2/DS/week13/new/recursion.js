// function printing(n){
//     if(n<=10){
//         console.log(n);
//         printing(n+1)
//     }
  
// }

// printing(1);


// function sum(array){
//     if(array.length===0) return 0;
//     return array[0]+sum(array.slice(1))
// }

// let arr = [1,2,3,4,5]
// console.log(sum(arr))


// function factorial(num){
//     if(num<=1) return 1;
//     return num*factorial(num-1);
// }

// console.log(factorial(3));


// function palindrome(number){
//     const str = number.toString()
//     function reverse(str){
//         if(str==="") return ""
//         return reverse(str.substr(1))+str[0]
//     }
//     const reverseNum = reverse(str)
//     return reverseNum ===  str
// }
// console.log(palindrome(1221));


// function reverse(str){
//     if(str==="") return ""
//     return reverse(str.substr(1))+str[0]
// }

// console.log(reverse('hello'));


let array = [4,3,6,4,3,2]
for(let i =0;i<array.length;i++){
    let unique = true;
    for(j=0;j<array.length;j++){
        if(i!=j && array[i]===array[j]){
            unique =false
            break;
        }
    }
    if(unique){
        console.log(array[i]);
        break;
    }
}