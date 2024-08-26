class Stack {
    constructor(){
        this.queue = []
    }
    push(value){
        let tempQueue = []
        while(this.queue.length>0){
            tempQueue.push(this.queue.shift())
        }
        this.queue.push(value)
            while(tempQueue.length>0){
                this.queue.push(tempQueue.shift())
            }
        }

        pop(){
            if(this.queue.length==0){
                return null
            }
            return this.queue.shift()
        }
        display(){
            console.log(this.queue);
        }
    }


    const stack = new Stack()
    stack.push(34)
    stack.push(44)
    stack.push(54)
    stack.push(64)
    stack.pop()
    stack.display()
    console.log(stack);