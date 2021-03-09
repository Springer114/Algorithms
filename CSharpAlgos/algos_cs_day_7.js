/**
 * A queue is a FIFO (first in, first out) data structure
 */

class Queue {
    constructor() {
      this.values = [];
    }
  
    /**
     * Adds a value and returns the new size.
     * 
     * @param {any} val
     * @returns {number} the new size
     */
  
    enqueue(val) {
      this.values.push(val);
      return this.size();
    }
  
    /**
     * @returns {any} the removed (front) value
     */
    //  3, 2, 1 
    // like pop but opposite ends
  
    dequeue() {
      return this.values.shift();
    }
    
    /**
     * @returns {boolean}
     */
  
    isEmpty() {
      if(this.size() === 0){
        return true;
      }else {
        return false;
      }
    }
  
    /**
     * @returns {number}
     */
  
    size() {
      return this.values.length;
    }
  }
  
  const queue = new Queue();
  
  console.log(queue.enqueue(1)); // should log 1
  // 1
  
  console.log(queue.enqueue(2)); // should log 2
  // 1 - 2
  
  console.log(queue.dequeue()); // should log 1
  // // 2
  
  console.log(queue.isEmpty()); // should log false
  
  console.log(queue.size()); // should log 1