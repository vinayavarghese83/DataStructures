class Queue{
    constructor(){
        this.stack=[]
    }
    enqueue(value){
        let temp =[]
        while(this.stack.length>0){
            temp.push(this.stack.pop())
        }
        this.stack.push(value)
        while(temp.length>0){
            this.stack.push(temp.pop())
        }
    }

    dequeue(){
        if(this.stack.length==0){
            return null
        }
        return this.stack.pop()
    }
}

let stack = new Queue()
stack.enqueue(20)
stack.enqueue(30)
stack.enqueue(40)
console.log(stack);
stack.dequeue()
console.log(stack);