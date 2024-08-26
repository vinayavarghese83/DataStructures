class Node{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right  = null
    }
}

class BinarySearchTree{

    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        const newNode = new Node(value)

            if(!this.root)
            {
                    this.root = newNode
            }
            else
            {
                this.insertNode(this.root,newNode)
            }
        
    }

    insertNode(root , newNode)
    {
        if(root.value < newNode.value)
        {
            if(root.left === null)
            {
                root.left = newNode
            }
            else
            {
                this.insertNode(root.left,newNode)
            }
        }
        else
        {
                if(root.right === null)
                {
                    root.right =  newNode
                }
                else
                {
                    this.insertNode(root.right,newNode)
                }
        }
    }

    isBST(root,minValue=Infinity,maxvalue= Infinity)
    {
        if(!root)
        {
            return true //is a BST //empty
        }

        if (minvalue >= root.value ||  maxvalue  <= root.value) //opposite of BST
        {   
            return false;
        }

        return (this.isBST(root.left,minvalue,root.value) && this.isBST(root.right,root.value,maxvalue))
        
    }
}

const bst =new BinarySearchTree()
console.log(bst.insert(10))