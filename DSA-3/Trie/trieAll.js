class Node{
    constructor() {
       this.children= {}
       this.isEnd = false
    }
 }
 class Trie{
    constructor(){
       this.root = new Node()
    }
    insert(word){
       let curr = this.root
       for(let char of word){
          if(!curr.children[char]){
             curr.children[char] = new Node()
            
          }
          curr= curr.children[char]
          console.log(curr);
       }
       curr.isEnd = true
    }
 
    search(word){
       let curr = this.root
       for(let char of word){
          if(!curr.children[char]){
             return false
          }
          curr = curr.children[char]
       }
       return curr.isEnd
    }
    delete(word){
       if(!this.search(word)){
           return false
       }
       const deleteRecursively= (node,word,index) =>{
           if(!node){
               return false
           }
           if(index == word.length){
               if(node.isEnd){
                   node.isEnd = false
               }
               return Object.keys(node.children).length ===0
           }
           let char = word[index]
           if(deleteRecursively(node.children[char],word,index+1)){
               delete node.children[char]
               return !node.isEnd && Object.keys(node.children) === 0
           }
           return false
       }
       deleteRecursively(this.root,word,0)
       return true
   }

   prefixSearch(prefix){
       let curr= this.root
       for(let char of prefix){
          if(!curr.children[char]){
             return []
          }
          curr = curr.children[char]
       }
       const words = []
       function dfs(node,currWord){
          if(node.isEnd){
             words.push(currWord)
          }
          for(let char in node.children){
             dfs(node.children[char],currWord+char)
          }
       }
       dfs(curr,prefix)
       return words
    }
   display(){
    this.displayHelper(this.root,'')
   }
   displayHelper(root,prefix){
    if(root.isEnd){
       console.log(prefix);
    }
    for(let char in root.children){
       this.displayHelper(root.children[char],prefix+char)
    }
   }



//delete 
   delete(word) {
    if (!this.search(word)) {
        return false; // If the word is not in the trie, return false
    }

    function deleteRecursively(node, word, index) {
        if (index === word.length) {
            if (!node.isEnd) {
                return false; // The word doesn't exist as a word (could be a prefix)
            }
            node.isEnd = false; // Mark the end of the word as false
            return Object.keys(node.children).length === 0; // Check if node can be safely deleted
        }

        const char = word[index];
        const nextNode = node.children[char];

        if (!nextNode) {
            return false; // If the character is not found, return false
        }

        const shouldDeleteChildNode = deleteRecursively(nextNode, word, index + 1);

        if (shouldDeleteChildNode) {
            delete node.children[char]; // Delete the reference to the child node
            return Object.keys(node.children).length === 0 && !node.isEnd; // Check if current node can be deleted
        }

        return false;
    }

    deleteRecursively(this.root, word, 0);
    return true; // If deletion was successful
}


 }
 const trie = new Trie()
 trie.insert("apple")
 trie.insert("app")
 trie.insert("ant")
 trie.insert("banana"); 
 trie.insert("ball"); 
 trie.display()
 console.log("-------------");
 trie.delete("app")
 console.log(trie.search("ant"));
 console.log(trie.prefixSearch("ap"));
 trie.display()