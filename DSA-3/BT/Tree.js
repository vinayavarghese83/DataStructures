class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    inserting(value)
    {
        let newNode = new Node(value)
        if(!this.root)
        {
            this.root = newNode
        }
        else
        {
            //recurseively
            this.insertNodes(this.root , newNode)
        }

    }

    insertNodes(root , newNode)
    {
        if(newNode.value < root.value)
        {
            if(root.left === null)
            {
            root.left  = newNode
            }
            else
            {
                this.insertNodes(root.left,newNode)
            }

        }
        else
        {
            if(root.right === null)
                {
                root.right  = newNode
                }
                else
                {
                    insertNodes(root.right,newNode)
                }
            }
    }

    // // Method to insert a node into the binary tree
    // insert(value) {
    //     const newNode = new TreeNode(value);
    //     if (!this.root) {
    //         this.root = newNode;
    //     } else {
    //         this._insertRecursive(this.root, newNode);
    //     }
    // }

    // _insertRecursive(current, newNode) {
    //     if (newNode.value < current.value) {
    //         if (!current.left) {
    //             current.left = newNode;
    //         } else {
    //             this._insertRecursive(current.left, newNode);
    //         }
    //     } else {
    //         if (!current.right) {
    //             current.right = newNode;
    //         } else {
    //             this._insertRecursive(current.right, newNode);
    //         }
    //     }
    // }

    // Method for inorder traversal
    inorderTraversal(node, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }
}

// Example Usage
const bt = new BinaryTree();
bt.inserting(10)
console.log("Inserted 10 " );
bt.inserting(5);
console.log("Inserted 5 " );
bt.inserting(15);
console.log("Inserted 15 " );
bt.inserting(3);
console.log("Inserted 3 " );

console.log("Inorder Traversal:", bt.inorderTraversal(bt.root));  // Output: [3, 5, 10, 15]
