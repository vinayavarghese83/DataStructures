//stack ,enqueue , dequeue

class Stack {
  constructor(max = 10) {
    this.stack = [];
    this.size = max;
  }

  enqueue(value) {
    this.stack.push(value);
    
    this.size++
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  dequeue() {
    this.stack.pop();
    this.size --
  }

  display() {

    console.log(this.stack)
  }
}

const stck = new Stack();
stck.enqueue(10)
stck.enqueue(20)
stck.display()

stck.dequeue()
stck.display()


