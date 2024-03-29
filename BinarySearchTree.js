class Node {
    constructor(attribute, parent = null) {
        this.attribute = attribute;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = parent;
    }
}

class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    // Function to Build a Tree
    buildTree(arr) {
        if (!arr.length) {
            return null;
        }
        // Sort the array and remove duplicates to ensure a balanced tree
        arr = Array.from(new Set(arr.sort((a, b) => a - b)));

        // Add Nodes to Tree
        return this.insert(arr, 0, arr.length - 1);
    }

    // Function to Insert an Array into a Tree
    insert(arr, start, end, parent = null) {
        // Base case: stop when start index exceeds end index
        if (start > end) {
            return null;
        }
    
        // Calculate the middle index
        const mid = Math.floor((start + end) / 2);
    
        // Create a new node with the value at the middle index
        const node = new Node(arr[mid], parent);
    
        // Recursively build left and right subtrees
        node.leftChild = this.insert(arr, start, mid - 1, node); // Left subtree: start to mid-1
        node.rightChild = this.insert(arr, mid + 1, end, node); // Right subtree: mid+1 to end
    
        return node; // Return the constructed node
    }

    // Function to Insert a Node into the Tree
    insertNode(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        while (true) {
            if (value < current.attribute) {
                if (current.leftChild === null) {
                    current.leftChild = newNode;
                    newNode.parent = current;
                    break;
                }
                current = current.leftChild;
            } else {
                if (current.rightChild === null) {
                    current.rightChild = newNode;
                    newNode.parent = current;
                    break;
                }
                current = current.rightChild;
            }
        }
    }

    // Delete a Node
    deleteItem(value) {
        this.root = this.deleteRecursively(this.root, value);
    }

    // Helper Function to Perform the Deletion Recursively
    deleteRecursively(node, value) {

        // Tree is Empty
        if (node === null) {
            return null;
        }

        // Recursively Find the Node
        if (value < node.attribute) {
            node.leftChild = this.deleteRecursively(node.leftChild,value);
        } else if (value > node.attribute) {
            node.rightChild = this.deleteRecursively(node.rightChild,value);
        } else {

            // Return appropriate Pathway
            if (node.leftChild === null) {
                return node.rightChild;
            } else if (node.rightChild === null) {
                return node.leftChild;
            }

            // Node with Children
            let temp = this.findMinNode(node.rightChild);
            node.attribute = temp.attribute;

            // Delete the Inorder Successor
            node.rightChild = this.deleteRecursively(node.rightChild, temp.attribute);
        }
        return node;
    }

    // Function to Find the Minimum Node in a Tree
    findMinNode(node) {
        let current = node;
        while (current.leftChild != null) {
            current = current.leftChild;
        }
        return current;
    }

    // Function to find a Value
    find(value) {
        return this.findRecursive(this.root, value);
    }

    // Function to Search through a Tree for a Value
    findRecursive(node, value) {
        if (node === null) {
            return null;
        }

        if (value === node.attribute) {
            return node;
        } else if (value < node.attribute) {
            return this.findRecursive(node.leftChild, value);
        } else {
            return this.findRecursive(node.rightChild, value);
        }
    }

    // Function to Print the Traversal of the Tree
    callback (result) {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }

    // Function to do Level Order Traversal
    levelOrder (callback = null) {
        if (!this.root) return null; // If there isn't a tree then return a null value
        
        let queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            let currentNode = queue.shift() // Remove a node from the queue 
            result.push(currentNode.attribute);

            if (currentNode.leftChild) { // Push left child into queue
                queue.push(currentNode.leftChild);
            }
            if (currentNode.rightChild) { // Push right child into queue
                queue.push(currentNode.rightChild);
            }
        }

        if (callback) {
            callback(result);
        } 

        return result;
    }

    // Function to do inOrder Traversal
    inOrder(callback = null) {
        let result = [];

        const inOrderTraversalHelper = (node) => {
            if (node ===null) {
                return null;
            }
            inOrderTraversalHelper(node.leftChild);
            result.push(node.attribute);
            inOrderTraversalHelper(node.rightChild);
        }

        inOrderTraversalHelper(this.root);

        if (callback) {
            callback(result);
        } 

        return result;
    }

    // Function to do a Pre-Order Traversal
    preOrder(callback) {
        let result = [];

        const preOrderTraversalHelper = (node) => {
            if (node ===null) {
                return null;
            }
            result.push(node.attribute);
            preOrderTraversalHelper(node.leftChild);
            preOrderTraversalHelper(node.rightChild);
        }

        preOrderTraversalHelper(this.root);

        if (callback) {
            callback(result);
        } 

        return result;
    }

    postOrder(callback) {
        let result = [];

        const postOrderTraversalHelper = (node) => {
            if (node ===null) {
                return null;
            }
            postOrderTraversalHelper(node.leftChild);
            postOrderTraversalHelper(node.rightChild)
            console.log(node.attribute);
            result.push(node.attribute);
        }

        postOrderTraversalHelper(this.root);

        if (callback) {
            callback(result);
        } 

        return result;
    }

    height(node) {
        if (node === null) {
            return -1;
        }

        let leftHeight = this.height(node.leftChild);
        let rightHeight = this.height(node.rightChild);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    depth(node) {
        if (node === null) {
            return -1; // Node not found
        }
    
        let depth = 0;
        while (node.parent !== null) {
            depth++;
            node = node.parent;
        }
        return depth;
    }

    isBalanced(node = this.root) {
        if (node === null) {
            return true; // A null tree is balanced
        }
    
        // Use the height function to get the height of left and right subtrees
        let leftHeight = this.height(node.leftChild);
        let rightHeight = this.height(node.rightChild);
    
        // Calculate the difference in heights
        let heightDiff = Math.abs(leftHeight - rightHeight);
    
        // Check the balance condition at the current node and recursively for all nodes
        if (heightDiff <= 1 && this.isBalanced(node.leftChild) && this.isBalanced(node.rightChild)) {
            return true;
        } else {
            return false;
        }
    }
    

    rebalance() {
        // Collect all values in the tree in sorted order
        let sortedValues = this.inOrder();
    
        // Rebuild the tree from the sorted list
        this.root = this.buildTree(sortedValues);
    }

    printTree() {
        const printNode = (node, prefix = "", isLeft = true) => {
            if (node === null) {
                return;
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.attribute}`);
            if (node.leftChild !== null || node.rightChild !== null) {
                printNode(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
                printNode(node.rightChild, `${prefix}${isLeft ? "    " : "│   "}`, false);
            }
        };
        printNode(this.root);
    }

}

module.exports = { Node, Tree }