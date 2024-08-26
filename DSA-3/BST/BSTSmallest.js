
// Method 1: Inorder Traversal
// BST Property: An inorder traversal of a BST yields nodes in ascending order.
// Approach:
// Perform an inorder traversal of the binary tree and store the results in a list.
// Check if this list is sorted in strictly increasing order.
// If it is, the tree is a BST; otherwise, it's not.

// Method 2: Recursion with Bounds
// BST Property: For every node in a BST:
// All nodes in its left subtree are smaller.
// All nodes in its right subtree are larger.