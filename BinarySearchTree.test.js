const { Tree, Node } = require('./BinarySearchTree'); 

describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        bst = new Tree([]);
    });

    test('buildTree creates a balanced tree from a sorted array without duplicates', () => {
        const values = [1, 2, 3, 4, 5];
        bst = new Tree(values);
        expect(bst.root.attribute).toEqual(3);
        expect(bst.root.leftChild.attribute).toEqual(1);
        expect(bst.root.rightChild.attribute).toEqual(4);
        expect(bst.root.leftChild.rightChild.attribute).toEqual(2);
        expect(bst.root.rightChild.rightChild.attribute).toEqual(5);
    });

    test('insert adds a new node correctly', () => {
        bst = new Tree([2, 3, 4]); // Initially create a BST with these nodes
        bst.insert([1, 5], 0, 1); // Attempt to insert new nodes; adjust the method as needed to fit this test
        expect(bst.find(1).attribute).toEqual(1); // Implement find method to verify
        expect(bst.find(5).attribute).toEqual(5);
    });

    test('deleteNode removes a node correctly', () => {
        const values = [1, 2, 3, 4, 5];
        bst = new Tree(values);
        bst.deleteItem(3); // Remove the root in this case, adjust based on your implementation
        expect(bst.find(3)).toBeNull(); // Assuming the find method is correctly implemented
        expect(bst.root.attribute).not.toEqual(3); // The new root should not be 3
    });
});