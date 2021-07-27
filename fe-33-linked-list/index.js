class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    addFirst(data) {
        this.root = new Node(data, this.root);
    }

    addInCentre(data, previousData) {
        const newNode = new Node(data);

        let previousNode = this.root;
        while (previousNode.data !== previousData) {
            previousNode = previousNode.next;
        }

        const nextNode = previousNode.next;
        previousNode.next = newNode;
        previousNode.next.next = nextNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (this.root === null) {
           this.root = newNode;
           return;
        }

        let currentNode = this.root;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
}

const linkedList = new LinkedList();

linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addFirst(0);
linkedList.addLast(11);
linkedList.addFirst('Hi');
linkedList.addInCentre('CENTER', 2)


console.log(JSON.stringify(linkedList.root));