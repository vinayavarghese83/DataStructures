class Stack {
    constructor(){
        this.items = [];
    }

    push(data){
        this.items.push(data)
    }

    pop(){
        if(this.isEmpty()){
            return "underflow";
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "No elements in stack"
        }
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    printStack(){
        let str = "";
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+ " ";
        }
        return str;
    }
}

const stack = new Stack();
stack.push(12)
stack.push(22)
stack.push(32)
stack.push(42)

console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.peek());;