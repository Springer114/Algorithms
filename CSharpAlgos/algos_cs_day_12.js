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
  
    print(node = this.root) {
        if(!node) return;
    
        if(node.left) {
            this.print(node.left);
        }
    
        console.log(node.val);
    
        if(node.right) {
            this.print(node.right);
        }
    }
  
    /**
     * Inserts the value in the appropriate place in the tree.
     * Stretch for recursion if you can.
     * 
     * @returns {BST} a reference to this tree
     */
  
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
}

  const bst = new BST();

  // note the chaining
  bst
    .insert(20)
    .insert(10)
    .insert(30)
    .insert(40)
    .insert(25)
    .insert(5);
  
  const { root } = bst;
  
  console.log(root.right.left.val); // should log 25
  
  console.log(root.right.right.val); // should log 40
  
  console.log(root.left.val); // should log 10
  
  //      20
  //     /  \
  //   10    30
  //  /     /  \
  // 5    25    40