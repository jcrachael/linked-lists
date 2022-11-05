class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
};

// This will represent the full list
class LinkedList {
    constructor(headNode) {
        this.HEAD = headNode;
        this.HEAD.nextNode = null;
    }

    // Add a Node to the end of the LinkedList
    append(value) {
        // Make a Node with this value
        const newNode = new Node(value);
        // store the current head node in a temp variable
        let temp = this.HEAD;
        // if the head node has a nextNode, change the temp
        // variable to store the head's nextNode and repeat until
        // you reach a node with no nextNode (i.e., the tail node)
        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }
        // set the (previous) tail node to point to the new Node
        temp.nextNode = newNode;
        // Append that Node to the end of the LinkedList
    };

    // Add a Node to the start of the LinkedList
    prepend(value) {
        // Make a new Node with this value
        let newHeadNode = new Node(value);
        // Set the newHeadNode to point to this.HEAD (the old head)
        newHeadNode.nextNode = this.HEAD;
        // set this.HEAD to be newHeadNode
        this.HEAD = newHeadNode;
    }

    // Return the total number of Nodes in the LinkedList
    size() {
        let temp = this.HEAD;
        let count = 0;
        while (temp != null) {
            temp = temp.nextNode;
            count++;
        }
        return count;
    }

    // Return the first Node in the LinkedList
    head() {
        return this.HEAD.value;
    }

    // Return the last Node in the LinkedList
    tail() {
        let temp = this.HEAD;
        while (temp.nextNode != null) {
            temp = temp.nextNode
        }
        return temp.value;
    }

    at(index) {
        let temp = this.HEAD;
        let count = 1;
        // while there are still nodes
        // AND while the counter does not equal the index of the 
        // node we want
        while (temp.nextNode != null && count !== index ) {
            // get the next node
            temp = temp.nextNode;
            // increment the counter
            count++;
        }
        // once the counter equals the index we want, return that node's value
        return temp.value;
    }

    pop() {
        let temp = this.HEAD;
        while (temp.nextNode.nextNode != null) {
            temp = temp.nextNode;
        }
        temp.nextNode = null;
    }

    contains(value) {
        if (true) {
            return true;
        } else {
            return false;
        }
    }

    find(value) {
        // returns the index of the node containing the value
        // returns null if the value is not found
    }

    toString() {
        // represent the Nodes in this LinkedList as a string, e.g.
        // ( value ) -> ( value ) -> ( value ) -> null
    }
};



