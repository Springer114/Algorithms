class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

    insert(val, node = this.root) {
        const toInsert = new BSTNode(val);

        if(!node) {
        // empty tree
        this.root = toInsert;
        } else if(!node.left && val < node.val) {
        node.left = toInsert;
        } else if (!node.right && val > node.val) {
        node.right = toInsert;
        } else {
        this.insert(val, val < node.val ? node.left : node.right)
        }

        return this;
    }

  /**
   * Creates an array ordered by parent first, then children.
   * 
   * @param {BSTNode} node the starting node; defaults to the root
   * @param {number[]} arr the array of values
   * @returns {number[]}
   */

    toArrPreOrder(node = this.root, arr = []) {
        if (node == null)
        return arr;
        arr.push(node.val);
        this.toArrPreOrder(node.left, arr);
        this.toArrPreOrder(node.right, arr);
        return arr;
    }

  /**
   * Creates an array of the tree values ordered by ascending value.
   * 
   * @param {BSTNode} node the starting node; defaults to the root
   * @param {number[]} arr the array of values
   * @returns {number[]}
   */

    toArrInOrder(node = this.root, arr = []) {
        if (node == null)
        return arr;
        this.toArrInOrder(node.left, arr);
        arr.push(node.val);
        this.toArrInOrder(node.right, arr);
        return arr;
    }

  /**
   * Creates an array of the tree values, children first, then parent.
   * 
   * @param {BSTNode} node the starting node; defaults to the root
   * @param {number[]} arr the array of values
   * @returns {number[]}
   */

    toArrPostOrder(node = this.root, arr = []) {
        if (node == null)
        return arr;
        this.toArrPostOrder(node.left, arr);
        this.toArrPostOrder(node.right, arr);
        arr.push(node.val);
        return arr;
    }
}

const bst = new BST();

bst
  .insert(20)
  .insert(10)
  .insert(30)
  .insert(40)
  .insert(25)
  .insert(5);

console.log(bst.toArrPreOrder()); // should log [20, 10, 5, 30, 25, 40]

console.log(bst.toArrInOrder()); // should log [5, 10, 20, 25, 30, 40]

console.log(bst.toArrPostOrder()); // should log [5, 10, 25, 40, 30, 20]

//      20
//     /  \
//   10   30
//  /    /  \
// 5    25  40