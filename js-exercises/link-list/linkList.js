import LinkListNode from './linkListNode';

export default class LinkList {
  constructor(value) {
    this.head = new LinkListNode(value);
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new LinkListNode(value);
      return this.head;
    }
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;

    return this.head;
  }

  append(value) {
    if (this.head === null) {
      this.head = new LinkListNode(value);
      return this.head;
    }
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = new LinkListNode(value);

    return this.head;
  }

  delete(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;

    while (curr !== null) {
      if (curr.next.value === value) {
        curr.next = curr.next.next;
      }
      curr = curr.next;
    }
  }

  traverse() {
    if (this.head === null) {
      return;
    }
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }
  }

  contains(value) {
    if (this.head === null) {
      return false;
    }

    let curr = this.head;

    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  }

  length() {
    if (this.head === null) {
      return 0;
    }
    let length = 1;
    let curr = this.head;

    while (curr.next !== null) {
      length += 1;
      curr = curr.next;
    }

    return length;
  }
}
