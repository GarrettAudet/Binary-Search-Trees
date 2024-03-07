class Node {
    constructor(attribute) {
        this.attribute = attribute;
        this.leftChild = null;
        this.rightChild = null;
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

        return this.insert(arr, 0, arr.length - 1);
    }

    insert(arr,start,end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start+end)/2);
        const node = new Node(arr[mid]);

        node.leftChild = this.insert(arr, start, mid-1);
        node.rightChild = this.insert(arr, mid+1, end);

        return node;
    }

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
                    break;
                }
                current = current.leftChild;
            } else {
                if (current.rightChild === null) {
                    current.rightChild = newNode;
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

    findMinNode(node) {
        let current = node;
        while (current.leftChild != null) {
            current = current.leftChild;
        }
        return current;
    }

    find(value) {
        return this.findRecursive(this.root, value);
    }

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

    callback (values) {
        for (let i = 0; i < values.length; i++) {
            console.log(values[i]);
        }
    }

    levelOrder (callback = null) {
        if (!this.root) return null; // If there isn't a tree then return a null value
        
        let queue = [this.root];
        const values = [];

        while (queue.length > 0) {
            let currentNode = queue.shift() // Remove a node from the queue 
            values.push(currentNode.attribute);

            if (currentNode.leftChild) { // Push left child into queue
                queue.push(currentNode.leftChild);
            }
            if (currentNode.rightChild) { // Push right child into queue
                queue.push(currentNode.rightChild);
            }
        }

        if (callback) {
            callback(values);
            return null;
        } else {
            return values;
        }
    }

    inOrder(callback) {

    }

    preOrder(callback) {

    }

    postOrder(callback) {

    }

    height(node) {

    }

    depth(node) {

    }

    isBalanced() {

    }

    rebalance() {

    }

    printTree() {
        const prettyPrint = (node, prefix = "", isLeft = true) => {
            if (node === null) {
              return;
            }
            if (node.rightChild !== null) {
              prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
            if (node.leftChild !== null) {
              prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
          };
    }
}

module.exports = { Node, Tree}