/**
 * Singly-Linked List Node class
 */

class SLLNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /**
   * Singly-Linked List class
   */
  
  class SLL {
    constructor() {
      this.head = null; // the list is initially empty
    }
  
    insertAtBack(val) {
      const node = new SLLNode(val);
  
      if(!this.head) {
        this.head = node;
      } else {
        let runner = this.head;
  
        while(runner.next) {
          runner = runner.next;
        }
  
        runner.next = node;
      }
  
      return this;
    }
  
    /**
     * Determines whether the given value is in the list.
     * 
     * @param {any} val the value to find
     * @returns {boolean}
     */
    //for loop or while loop
    //5, 6, 7 
    //does it contain 10?
  
    contains(val) {
        let runner = this.head;
        if(runner.val === val)
        {
          return true;
        }
        else{
          while (runner.next != null)
          {
            runner = runner.next;
            if(runner.val === val)
            {
              return true;
            }
          }
        }
      return false;
    }
  
    /**
     * Removes the last node and returns its value (or null if list is empty).
     * 
     * @returns {any|null}
     */// 5,7,6,8 
  
    removeBack() {
      let runner = this.head;
      if(runner === null){ //if list is empty to begin with
        return null;
      }
      while (runner != null)
      {
        runner = runner.next;
        if(runner.next === null){
          return runner;
        }  
      }
      return runner.val; 
    }
  
    /**
     * BONUS: Finds and returns the maximum value (or null if list empty) recursively.
     * 
     * @param {SLLNode} node
     * @param {SLLNode} maxNode
     * @returns {any|null}
     */
    
    // recursiveMax(node = this.head, maxNode = this.head) {
    //   // your code here
    // }
  }
  
  const list = new SLL();
  
  list.insertAtBack(5);
  list.insertAtBack(7);
  list.insertAtBack(6);
  list.insertAtBack(8);
  
  // console.log(list.contains(6)); // should log true
  // console.log(list.contains(10)); // should log false
  
  console.log(list.removeBack()); // should log 6
  // list.insertAtBack(20);
  
  // console.log(list.recursiveMax()); // should log 20