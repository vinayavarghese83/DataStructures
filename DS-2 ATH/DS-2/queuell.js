class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
class Queue{
    constructor(){
        this.front = null;
        this.rear = null
    }
    enqueue(data){
        const node = new Node(data)
        if(this.rear===null){
            this.front = this.rear = node
            return;
        }
        this.rear.next = node
        this.rear = node
    }

    dequeue(){
        if(this.isEmpty()){
            return "underflow";
        }
        const dequeueNode = this.front
        this.front = this.front.next
        if(this.front===null){
            this.rear = null
        }
        return dequeueNode.data
    }


    frontElement(){
        if(this.isEmpty()){
            return "NO elements in queue"
        }
        return this.front.data;
    }

    isEmpty(){
        return this.front===null
    }

    printqueue(){
        let curr = this.front
        let str = ''
        while(curr){
            str +=curr.data+' ';
            curr = curr.next
        }
        return str.trim();
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.printqueue());
console.log(queue.dequeue());
console.log(queue.frontElement());