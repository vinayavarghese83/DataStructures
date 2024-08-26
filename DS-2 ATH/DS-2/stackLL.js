class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
    }


    push(data){
        const node = new Node(data)
        if(this.top!=null){
            node.next = this.top
        }
        this.top = node
    }
    pop(){
        if(this.isEmpty()){
            return "Underflow";
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.data;
    }

    peek(){
        if(this.isEmpty()){
            return "Satck is empty"
        }
        return this.top.data
    }

    isEmpty(){
        return this.top===null
    }


    printStack(){
        let curr = this.top
        let str =""
        while(curr){
            str+= curr.data + ' '
            curr = curr.next 
        }
        return str.trim();

    }
}


const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());