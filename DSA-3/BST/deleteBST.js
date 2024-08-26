class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function deleteNode(root, key) {
    if (root === null) {
        return root;  // Node to be deleted not found
    }

    // Step 1: Find the node to be deleted
    if (key < root.data) {
        root.left = deleteNode(root.left, key);  // Key is in the left subtree
    } else if (key > root.data) {
        root.right = deleteNode(root.right, key);  // Key is in the right subtree
    } else {
        // Node to be deleted is found

        // Case 1: Node with only one child or no child
        if (root.left === null) {
            return root.right;  // Replace node with right child
        } else if (root.right === null) {
            return root.left;  // Replace node with left child
        }

        // Case 2: Node with two children
        // Find the in-order successor (smallest in the right subtree)
        let successor = findMinValueNode(root.right);
        
        // Copy the successor's content to this node
        root.data = successor.data;
        
        // Delete the successor
        root.right = deleteNode(root.right, successor.data);
    }

    return root;
}

function findMinValueNode(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

// Helper function to print the tree (in-order traversal)
function inOrderTraversal(root) {
    if (root !== null) {
        inOrderTraversal(root.left);
        console.log(root.data);
        inOrderTraversal(root.right);
    }
}

// Example usage
let root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

console.log("Inorder traversal before deletion:");
inOrderTraversal(root);

root = deleteNode(root, 50);  // Delete node with value 50

console.log("Inorder traversal after deletion:");
inOrderTraversal(root);
