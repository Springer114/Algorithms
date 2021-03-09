class SLLNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SLL {
	constructor() {
		this.head = null;
	}

	insertAtBack(val) {
		const newNode = new SLLNode(val);

		if (!this.head) {
			this.head = newNode;
			return this;
		}

		let current = this.head;

		while (current.next) {
			current = current.next;
		}

		current.next = newNode;

		return this;
	}

	/**
	 * Reverses the list in place.
	 * Don't create a new list.
	 *
	 * @returns {SLL} the list
	 */

	reverse() {
		if (!this.head) {
			return null;
		}
		let runner = this.head;
		let previous = null;
		let next = null;
		while (runner != null) {
			next = runner.next;
			runner.next = previous;
			previous = runner;
			runner = next;
		}
		this.head = previous;
		return this;
	}

	/**
	 * Determines whether the list has a loop.
	 *
	 * @returns {boolean}
	 */

	hasLoop() {
		var runner1 = this.head;
		var runner2 = this.head;
		while (runner2.next != null) {
			runner2 = runner2.next;
			if (runner2 == runner1) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Removes all the nodes with negative values.
	 *
	 * @returns {SLL} the list
	 */

	removeNegatives() {
		if (!this.head) {
			return false;
		}
		if (this.head.val < 0) {
			this.head = this.head.next;
		}
		let runner = this.head;
		let prev = this.head;
		while (runner) {
			if (runner.val < 0) {
				prev.next = runner.next;
			}
			prev = runner;
			runner = runner.next;
		}
		return this;
	}
}

const list = new SLL();

list
	.insertAtBack(1)
	.insertAtBack(2)
	.insertAtBack(-2)
	.insertAtBack(3)
	.insertAtBack(-1);
// 1 -> 2 -> -2 -> 3 -> -1

list.reverse();
// -1 -> 3 -> -2 -> 2 -> 1

console.log(list.head.val); // should log -1

list.removeNegatives();
// 3 -> 2 -> 1

console.log(list.head.next.val); // should log 2

console.log(list.hasLoop()); // should log false

list.head.next.next.next = list.head;
// 3 -> 2 -> 1 -> 3 -> 2 -> 1 ...

console.log(list.hasLoop()); // should log true
