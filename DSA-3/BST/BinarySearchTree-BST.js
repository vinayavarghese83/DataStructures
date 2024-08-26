class Node
{
    constructor(value)
    {
        this.value = value
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root  = null;
        console.log("hi")
    }


    insert(value)
    {
        const newNode  =new  Node(value)
        if(this.root === null)
        {
            this.root  = newNode
        }
        else
        {
            this.insertBSTNodes(this.root , newNode)
            // this.insertBSTNodes //if not using this reference error
        }
    }

    insertBSTNodes(node , newNode)
    {

        if(node != null)
        {
            if(newNode.value < node.value)
            {
                if(node.left  === null)
                {
                    node.left = newNode
                }
                else
                {
                    this.insertBSTNodes (node.left , newNode)
                }
            }
            else
            {
                if(node.right  === null)
                {
                    node.right = newNode
                }
                else
                {
                    this.insertBSTNodes (node.right , newNode)
                }
            }
        }
    }

    search(root,key)
    {
        if(!root )
        {
            return false;
        }
        if (root.value === key)
        {
            // console.log("searched found at root :" , root)
            return true
        }
        else if(root.value < key)
        {
            return this.search(root.left ,key) 
        }
        else
        {
            return this.search(root.right ,key) // this is important...
        }
    }

    preOrder(root)
    {
        if(root)
        {
            console.log("pre order " ,root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
        
    }

    inOrder(root)  // Left - root -Right
    {
        if(root)
        {
            this.inOrder(root.left)
            console.log("in order ",root.value)
            this.inOrder(root.right)
        }
    }
  
    postOrder(root)
    {
        if(root)
        {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log("post order " ,root.value)
        }
    }
    
    levelOrderBFS()  //breadth
    {
        let queue  = [];

        queue.push(this.root)
        while(queue.length)
        {
            let curr = queue.shift() //p0ushes the root first and then so on.
            //after using shift , the root changes
            
            console.log(curr.value)
            if(curr.left)
            {
                queue.push(curr.left )
            }
            if(curr.right)
            {
                queue.push(curr.right)
            }
        }

    }

    minNode(root)
    {
        //find left dead end , use recursion if many levels
        if(!root.left)
        {
            return root.value
        }
        else
        {
            return this.minNode(root.left)
        }
    }

     maxNode(root)
     {
         if(!root.right)
        {
            return root.value
        }
        else
        {
            return this.maxNode(root.right)
        }
     }
}

let bst  = new BinarySearchTree();
console.log(bst)
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,15))
// bst.preOrder(bst.root)//,Root ,Left ,Right
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

bst.levelOrderBFS()

// console.log(bst.minNode(bst.root))

// console.log(bst.maxNode(bst.root))


