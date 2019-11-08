class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertHead(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }
}
