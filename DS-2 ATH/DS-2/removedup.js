function removeDuplicates(str){
    let charMap = {}
    let result =''
    for(let i=0;i<str.length;i++){
        let char = str[i]
        if(!charMap[char]){
            charMap[char] = true;
            result += char
        }
    }
    return result;
}

let string ="hello"
console.log(removeDuplicates(string));