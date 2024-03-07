const { Tree, Node } = require('./BinarySearchTree'); 

describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        bst = new Tree([]);
    });

    test('buildTree creates a balanced tree from a sorted array without duplicates', () => {
        const values = [3, 2, 4, 1, 5];
        const bst = new Tree(values);
    
        // Check root node
        expect(bst.root.attribute).toEqual(3);
    
        // Check left subtree
        expect(bst.root.leftChild.attribute).toEqual(1);
        expect(bst.root.leftChild.rightChild.attribute).toEqual(2);
    
        // Check right subtree
        expect(bst.root.rightChild.attribute).toEqual(4);
        expect(bst.root.rightChild.rightChild.attribute).toEqual(5);
    });

    test('insert adds new nodes correctly', () => {
        const bst = new Tree([2, 3, 4]); // Initially create a BST with these nodes
        bst.insertNode(1); // Correctly call insertNode for a single value
        bst.insertNode(5); // Insert another node
        expect(bst.find(1).attribute).toEqual(1); // Verify if the node with value 1 exists
        expect(bst.find(5).attribute).toEqual(5); // Verify if the node with value 5 exists
    });

    test('deleteNode removes a node correctly', () => {
        const values = [1, 2, 3, 4, 5];
        bst = new Tree(values);
        bst.deleteItem(3); // Remove the root in this case, adjust based on your implementation
        expect(bst.find(3)).toBeNull(); // Assuming the find method is correctly implemented
        expect(bst.root.attribute).not.toEqual(3); // The new root should not be 3
    });

    test('breadth first traversal works correctly', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);
    
        // Ensure the tree is constructed correctly
        // For simplicity, we use level-order traversal to verify the structure
        const resultAfterConstruction = bst.levelOrder();
        console.log("Tree after construction:", resultAfterConstruction);
        
        // Expected order for a BST constructed from values should be level order
        const expectedAfterConstruction = [3, 1, 4, 2, 5];
        expect(resultAfterConstruction).toEqual(expectedAfterConstruction);
    });

    test('inOrder Traversal Helper', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);

        // Ensure the tree is constructed correctly
        // For simplicity, we use in-order traversal to verify the structure
        const resultAfterConstruction = bst.inOrder();
        console.log("Tree after construction:", resultAfterConstruction);

        // Expected order for a BST constructed from values should be in-order
        const expectedAfterConstruction = [1, 2, 3, 4, 5];
        expect(resultAfterConstruction).toEqual(expectedAfterConstruction);
    });

    test('preOrder Traversal Helper', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);

        // Ensure the tree is constructed correctly
        // For simplicity, we use in-order traversal to verify the structure
        const resultAfterConstruction = bst.preOrder();
        console.log("Tree after construction:", resultAfterConstruction);

        // Expected order for a BST constructed from values should be in-order
        const expectedAfterConstruction = [3, 1, 2, 4, 5];
        expect(resultAfterConstruction).toEqual(expectedAfterConstruction);
    });

    test('postOrder Traversal Helper', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);

        // Ensure the tree is constructed correctly
        // For simplicity, we use in-order traversal to verify the structure
        const resultAfterConstruction = bst.postOrder();
        console.log("Tree after construction:", resultAfterConstruction);

        // Expected order for a BST constructed from values should be in-order
        const expectedAfterConstruction = [2, 1, 5, 4, 3];
        expect(resultAfterConstruction).toEqual(expectedAfterConstruction);
    });
});