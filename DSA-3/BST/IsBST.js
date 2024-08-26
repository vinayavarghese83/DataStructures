class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(node, min = null, max = null) {
    // An empty tree is a BST
    if (!node) return true;

    // If this node violates the min/max constraint, it's not a BST
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
        return false;
    }

    // Check the left and right subtree recursively
    // The max constraint for the left subtree is the current node's value
    // The min constraint for the right subtree is the current node's value
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}

// Example Usage

// Constructing a valid BST
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);
console.log("Tree1 is [10,5,15,2,7,20] " )
console.log(isBST(root));  // Output: true

// Constructing an invalid BST
let root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(12);  // Invalid node, should be less than 10
console.log("Tree2 is [10,5,15,2,12] " )

console.log(isBST(root2));  // Output: false
