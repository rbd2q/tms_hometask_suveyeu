class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    root = null;

    add(data) {
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

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

console.log(JSON.stringify(linkedList.root));