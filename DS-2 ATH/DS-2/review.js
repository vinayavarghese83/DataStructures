class Node{
      constructor(data){
        this.data = data;
        this.next = null;
      }
}

class Stack{
    constructor(){
        this.top = null;
    }
     
    push(data){
        let node = new Node(data)
        if(this.top===null){
            this.top = node
        }
        this.top.next = node
        this.top = node
    }

    isEmpty(){
        return this.top===null
    }



    print(){
        let str =''
        let curr = this.top
        while(curr){
            str += curr.data+' '
            curr = curr.next;
        }
        console.log(str);
    }





}



const stack = new Stack()
stack.push(12)
stack.push(23)
stack.push(32)
stack.push(43)
stack.print();
    
