

class Node{
    constructor() {
       this.children= {}
       this.isEnd = false
    }
 }
 
 class Trie{

    constructor()
    {
        this.root = new Node() //root is always empty
    }

    insert(word)
    {
        let curr = this.root;
        for( let char of word)
        {
            if(!curr.children[char])
            {
                curr.children[char] = new Node
            }
            curr = curr.children[char]
        }//finishes the word

        curr.isEnd =true
        // console.log(curr)
    }

search(word)
{
    let curr = this.root;
    for(let char of word)
    {
        if(!curr.children[char])
        {return "Not Found" }

        curr = curr.children[char]
    }
    // console.log(curr)
    if(curr.isEnd)
    {
        return "searched word " , word ," found"
    }
}
prefixSearch(prefix)
{
    let curr = this.root

    for (let char of prefix)
    {
        if(!curr.children[char])
        {
            return [];
        }
        curr = curr.children[char]
    }

    let words = [];

    function dfs(node,currword)
    {
        if(node.isEnd)
        {
            words.push(currword)
            // console.log(words)
        }

        for(let char in node.children)
        {
            dfs(node.children[char] , currword+char,words)
        }
    }

    dfs(curr,prefix)
    return words

   
}


}

const tri  = new Trie()
tri.insert("car")
tri.insert("cat")
tri.insert("cart")
tri.insert("dad")
tri.insert("cartier")

console.log(tri.search("car"))
console.log(tri.prefixSearch("car"))