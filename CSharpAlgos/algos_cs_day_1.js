// Monday

/**
 * Singly-Linked List Node class
 * @param {any} val
 */

class SLLNode {
    constructor(val) {
    this.val = val;
    this.next = null;
    }
}

//------------------------------------------------------------------------------------------------------//

/**
 * Singly-Linked List class
 */

class SLL {
constructor() {
    this.head = null; // the list is initially empty
    }
}

/**
 * Determines if the list is empty.
 * 
 * @returns {boolean}
 */

isEmpty() {
    return this.head === null;
//   or
    if (this.head === null) {
        return true;
    } else {
        return false;
    }
}

//------------------------------------------------------------------------------------------------------//

/**
 * Adds a node to the end of the list.
 * 
 * @param {any} val the value to add
 * @returns {SLL} the list
 */

insertAtBack(val) {
const newNode = new SLLNode(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let runner = this.head;

        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newNode;
    }
    return this;
}

//------------------------------------------------------------------------------------------------------//
  
/**
 * Adds all the array values to the list.
 * 
 * @param {any[]} arr an array of values
 * @returns {SLL} the list
 */

seedFromArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        this.insertAtBack(arr[i]);
    }
    return this;
}

//------------------------------------------------------------------------------------------------------//

/**
 * Prints a comma-separated list of the values.
 * 
 * @returns {void}
 */

display() {
    // your code here
}

const list = new SLL();
console.log(list.isEmpty()); // should log true

list.insertAtBack('Andy');
list.display(); // should log 'Andy'

list.insertAtBack('Anthony');
list.display(); // should log 'Andy,Anthony'

list.seedFromArr(['Bianca', 'CJ']);
list.display(); // should log 'Andy,Anthony,Bianca,CJ'

console.log(list.isEmpty()); // should log false

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------//