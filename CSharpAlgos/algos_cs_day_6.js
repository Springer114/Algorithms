/**
 * Stacks are LIFO (Last In First Out)
 */

class Stack {
    constructor() {
        this.values = [];
  }

    /**
     * Adds a new value to the top.
     * 
     * @param {any} val the value to add
     * @returns {number} the new size of the stack
     */

    push(val) {
        this.values.push(val)
        return this.values.length
    }

    /**
     * Removes and returns the top value.
     * 
     * @returns {any} the removed top value
     */

    pop() {
        return this.values.pop();
    }

    /**
     * Returns whether the stack is empty.
     * 
     * @returns {boolean}
     */

    isEmpty() {
        if (this.values.length === 0) {
            return true
        } else {
            return false
        }
    }

    /**
     * @returns {number} the number of items in the stack
     */

    size() {
        // your code here
    }

    /**
     * Returns, but doesn't remove, the top value.
     * 
     * @returns {any} the top value
     */

    peek() {
        // your code here
    }
}

const stack = new Stack();

console.log(stack.push('this')); // should log 1
// 'this'

stack.push('that');
// 'that'
// 'this'

console.log(stack.size()); // should log 2

console.log(stack.pop()); // should log 'that'
// 'this'

console.log(stack.peek()); // should log 'this'

console.log(stack.isEmpty()); // should log false