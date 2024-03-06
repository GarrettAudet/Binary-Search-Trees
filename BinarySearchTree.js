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

        return this._buildTreeHelper(arr, 0, arr.length - 1);
    }

    printTree() {
        const prettyPrint = (node, prefix = "", isLeft = true) => {
            if (node === null) {
              return;
            }
            if (node.right !== null) {
              prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
            if (node.left !== null) {
              prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
          };
    }
}