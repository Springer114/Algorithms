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
     * Returns the second to last value.
     * 
     * @returns {any|null} the second-to-last value (or null if empty)
     */
    
    secondToLast() {
        if (this.head == null || this.head.next == null) {
            return null;
        }
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        return runner.val;
    }
  
    /**
     * Removes the value and returns a confirmation.
     * 
     * @param {any} val
     * @returns {boolean} confirmation of success
     */
  
    removeVal(val) {
        let runner = this.head;
        let prev = this.head;
        while (runner) {
          if (runner.val == val){
            prev.next = runner.next;
            return true;
          }
          prev = runner;
          runner = runner.next;        
        }
        return false;
    }
  
    /**
     * BONUS
     * Adds the given value before a specified value and returns confirmation
     * 
     * @param {any} insertVal the value to insert
     * @param {any} beforeVal the value to prepend to
     * @returns {boolean} confirmation of success
     */
  
    prepend(insertVal, beforeVal) {
      let runner = this.head;
      let prev = this.head;
      while (runner) {
          if (runner.val == beforeVal) {
            const node = new SLLNode(insertVal);
            prev.next = node;
            node.next = runner.next;
            return true;
          }
          prev = runner;
          runner = runner.next;
      }
    }
  }
  
  const list = new SLL();
  list.insertAtBack(1);
  // 1
  
  console.log(list.secondToLast()); // should log null
  
  list
    .insertAtBack(2)
    .insertAtBack(3)
    .insertAtBack(4);
  // 1 -> 2 -> 3 -> 4
  
  console.log(list.secondToLast()); // should log 3
  console.log(list.removeVal(10)); // should log false
  
  console.log(list.prepend(5, 3)); // should log true
  // 1 -> 2 -> 5 -> 3 -> 4
  
  console.log(list.head.next.next.val); // should log 5