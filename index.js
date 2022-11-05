class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
};

// This will represent the full list
class LinkedList {
    constructor() {
        this.HEAD = null;
        this.HEAD.nextNode = null;
    }
    // Add a Node to the end of the LinkedList
    append(value) {
        // Make a Node with this value
        const newNode = new Node(value);
        if (this.HEAD === null) {
            return (this.HEAD = newNode);
        } 
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
    }
        
    
    // Add a Node to the start of the LinkedList
    prepend(value) {
        // Make a new Node with this value
        let newHeadNode = new Node(value);
        if (this.HEAD === null) {
            return (this.HEAD = newHeadNode)
        }
        // Set the newHeadNode to point to this.HEAD (the old head)
        newHeadNode.nextNode = this.HEAD;
        // set this.HEAD to be newHeadNode
        this.HEAD = newHeadNode;
    }

    // Return the total number of Nodes in the LinkedList
    size() {
        if (this.HEAD === null) {
            return null;
        }
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
        if (this.HEAD === null) {
            return null;
        }
        return this.HEAD;
    }

    // Return the last Node in the LinkedList
    tail() {
        if (this.HEAD === null) {
            return null;
        }
        let temp = this.HEAD;
        while (temp.nextNode != null) {
            temp = temp.nextNode
        }
        return temp;
    }

    at(index) {
        if (this.HEAD === null) {
            return null;
        }
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
        return temp;
    }

    pop() {
        if (this.HEAD === null) {
            return null;
        }
        if (this.HEAD.nextNode === null) {
            this.HEAD = null;
        }
        let temp = this.HEAD;
        while (temp.nextNode.nextNode != null) {
            temp = temp.nextNode;
        }
        temp.nextNode = null;
    }

    contains(value) {
        if (this.HEAD === null) {
            return null;
        }
        let temp = this.HEAD;
        while (temp.nextNode != null) {
            if (temp.value === value) {
                return true
            }
            temp = temp.nextNode;
        }
        if (temp.value === value) {
            return true
        }
        return false
    }

    find(value) {
        if (this.HEAD === null) {
            return null;
        }
        // returns the index of the node containing the value
        // returns null if the value is not found
        let temp = this.HEAD;
        let count = 0;
        while (temp.nextNode != null) {
            if (temp.value === value) {
                return count;
            }
            temp = temp.nextNode;
            count++;
        }
        if (temp.value === value) {
            return true
        }
        return null;
    }

    toString() {
        if (this.HEAD === null) {
            return null;
        }
        // represent the Nodes in this LinkedList as a string, e.g.
        // ( value ) -> ( value ) -> ( value ) -> null
        let temp = this.HEAD;
        let result = '';
        while (temp.nextNode != null) {
            result = result.concat(`( ${temp.value} ) --> `);
            temp = temp.nextNode;
        }

        result = result.concat(`( ${temp.value} ) --> null`);
        console.log(result);
        return result;
    }

    insertAt(value, index) {
        if (this.HEAD === null) {
            return null;
        }
        // Make the new node
        const newNode = new Node(value);
        // Get the node that points to the index
        const oldBeforeIndex = this.at(index - 1);
        // Get the node at the index
        const oldAtIndex = this.at(index);
        // Make the oldBeforeNode.nextNode point to newNode and
        // make the newNode.nextNode point to the OldAtNode
        oldBeforeIndex.nextNode = newNode;
        newNode.nextNode = oldAtIndex;
    }

    removeAt(index) {
        if (this.HEAD === null) {
            return null;
        }
        let length = this.size();
        if (index > length || index < 0) {
            return;
        }
        if (index === 0) {
            this.HEAD = HEAD.nextNode;
        } else {
            const prevNode = this.at(index - 1);
            prevNode.nextNode = prevNode.nextNode.nextNode;
        }
    }
};



