//Create BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }


  addNode(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insert(value){
    let node=new Node(value);
    if(this.root===null){
        this.root=node;
    }else{
        this.insertNode(this.root,node);
    }
}
insertNode(node,newNode){
    if(node.value>newNode.value){
        if(node.left===null){
            node.left=newNode;
            return;
        }else{
            this.insertNode(node.left,newNode);
        }
    }else{
        if(node.right===null){
            node.right=newNode;
            return;
        }
        this.insertNode(node.right,newNode);
    }
} 

  inorderDisplay(node) {
    if (node) {
      this.inorderDisplay(node.left);
      console.log(node.value);
      this.inorderDisplay(node.right);
    }
  }

 
search(key)
{

  return  this.searchNode(this.root,key)
}

searchNode(root,key)
{
    // console.log(root)
    if(root.value === null)
    {
        return `Searched key ${key} not found`
    }
    else
    {
        // console.log(root.value)
        if(root.value === key)
        {
            return `Searched key ${key}  found!`
        }
        if(root.value > key)
        {
            return this.searchNode(root.left,key)
        }
        else
        {
            return this.searchNode(root.right,key)
        }
    }
}

// inorder(node,arr){
//   if(node){
//       this.inorder(node.left,arr);
//       console.log(node.value)
//       this.inorder(node.right,arr); 
//   }
//   return arr;
// }

inorder(node,arr){
  if(node){
      this.inorder(node.left,arr);
      arr.push(node.value);
      this.inorder(node.right,arr); 
  }
  return arr;
}
//BST means smaller value is in left and higher is in right

}

console.log("Created BST!!");

let tree=new BST();
// let arr=[];
tree.insert(50);
tree.insert(15);
tree.insert(10);
tree.insert(25);
tree.insert(35);
tree.insert(11);
tree.insert(21);
tree.insert(60);

// tree.inorderDisplay(tree.root)


console.log("Searched element found : " ,tree.search(60))
// let res = tree.inorder(tree.root,arr);;
// console.log("Smallest Elememt is ",res[0]);
