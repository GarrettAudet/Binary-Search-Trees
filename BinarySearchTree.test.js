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

    test('Height Helper', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);

        // Ensure the tree is constructed correctly
        // For simplicity, we use in-order traversal to verify the structure
        const nodeFive = bst.find(5);
        const nodeFiveHeight = bst.height(nodeFive);
        expect(nodeFiveHeight).toEqual(0);
        const nodeFour = bst.find(4);
        const nodeFourHeight = bst.height(nodeFour);
        expect(nodeFourHeight).toEqual(1);
        const nodeThree = bst.find(3);
        const nodeThreeHeight = bst.height(nodeThree);
        expect(nodeThreeHeight).toEqual(2);
        const nodeOne = bst.find(1);
        const nodeOneHeight = bst.height(nodeOne);
        expect(nodeOneHeight).toEqual(1);
        const nodeTwo = bst.find(2);
        const nodeTwoHeight = bst.height(nodeTwo);
        expect(nodeTwoHeight).toEqual(0);
    });

    test('Depth Helper', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);

        // Root
        const nodeThree = bst.find(3);
        const nodeThreeHeight = bst.depth(nodeThree);
        expect(nodeThreeHeight).toEqual(0);

        // First-Level
        const nodeOne = bst.find(1);
        const nodeOneHeight = bst.depth(nodeOne);
        expect(nodeOneHeight).toEqual(1);
        const nodeFour = bst.find(4);
        const nodeFourHeight = bst.depth(nodeFour);
        expect(nodeFourHeight).toEqual(1);

        // Second-Level
        const nodeTwo = bst.find(2);
        const nodeTwoHeight = bst.depth(nodeTwo);
        expect(nodeTwoHeight).toEqual(2);
        const nodeFive = bst.find(5);
        const nodeFiveHeight = bst.depth(nodeFive);
        expect(nodeFiveHeight).toEqual(2);
    });

    test('Determine Balanced Tree', () => {
        const values = [3, 2, 1, 4, 5]; // Constructing a BST with these values
        const bst = new Tree(values);
        const balanced = bst.isBalanced();
        expect(balanced).toEqual(true);
    });

    test("Testing Tree Function", () => {
        const values = [];
        let randomArray = Math.floor(Math.random() * (10 - 8 + 1)) + 8; 

        for (let i = 0; i < randomArray; i++) {
            const randomNumber = Math.floor(Math.random() * 101);
            values.push(randomNumber);
        }

        const bst = new Tree(values);
        let balanced = bst.isBalanced();
        expect(balanced).toEqual(true);
        console.log(bst.levelOrder());
        console.log(bst.inOrder());
        console.log(bst.preOrder());
        console.log(bst.postOrder());

        randomArray = Math.floor(Math.random() * 5) + 1;
        for (let x = 0; x < randomArray; x++) {
            const randomNumber = Math.floor(Math.random() * 50 ) + 101;
            bst.insertNode(randomNumber);
        }

        balanced = bst.isBalanced();
        expect(balanced).toEqual(false);

        bst.rebalance();
        balanced = bst.isBalanced();
        expect(balanced).toEqual(true);

        console.log(bst.levelOrder());
        console.log(bst.inOrder());
        console.log(bst.preOrder());
        console.log(bst.postOrder());
    });
});