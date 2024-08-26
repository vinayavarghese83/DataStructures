class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
       this.size===0
    }

    getSize(){
        return this.size;
    }


    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head
            node.next = curr
            this.head = node
        }
        this.size++;
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next!=null){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++;

    }

    insertAt(index,value){
        if(index===0){
            this.prepend(value)
        }else if(index===this.getSize()-1){
            this.append(value)
        }else{
        const node = new Node(value)
        let curr = this.head
        for(let i=0;i<index-1;i++){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node
    }
        this.size++;
    }


    insertBefore(target,value){
        const node = new Node(value);
        let curr = this.head
        if(curr.value===target){
            node.next = curr
            this.head = node
        }else{
            while(curr.next.value!=target){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++;    
    }

    insertAfter(target,value){
        const node = new Node(value)
        let curr = this.head
        while (curr.value!=target) {
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node
        this.size++;
    }


    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr;
            curr = next
        }
        this.head = prev
        
    }

    removeDup(){
        if(this.head === null || this.head.next ===null){
            return this.head;
        }else{
            let result = new Set()
            let curr = this.head 
            let prev = null
            while(curr!==null){
                if(result.has(curr.value)){
                    prev.next = curr.next
                    this.size--;
                }else{
                   result.add(curr.value)
                   prev = curr
                }
                curr = curr.next
            }
        }
    }

    midlevalue(){
        let mid = Math.floor((this.getSize())/2)
        let curr = this.head
        for(let i=0;i<mid;i++){
             curr = curr.next
        }
        console.log(curr.value);  
    }

    print(){
        let res =[]
        if(this.isEmpty()){
            console.log("The list is Empty");
        }else{
           
            let curr = this.head
            while(curr){
                res.push(curr.value)
                curr = curr.next
            }
        }
        console.log(res.join(` -> `));
    }
}



const list = new LinkedList;
list.isEmpty();
list.getSize();
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.print()
list.append(5)
list.append(6)
list.print()
list.insertAt(3,7)
list.print()
list.insertBefore(7,0)
list.print()
list.insertAfter(6,4)
list.print()
list.prepend(2)
list.prepend(9)
list.prepend(3)
list.reverse();
list.print()
list.removeDup()
list.print()
list.midlevalue()

