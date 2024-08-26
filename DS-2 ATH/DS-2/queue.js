class Queue {
    constructor (data){
        this.items=[]
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            return "List is empty"
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    printQueue(){
        let str = "";
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+" "
        }
        return str;
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.printQueue());