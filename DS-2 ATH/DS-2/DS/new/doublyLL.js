class Node{
    constructor(value){
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail=null
        this.size= 0;
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }


    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
             this.head = this.tail = node;
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++;
    }


    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node;
        }
        this.size++;
        
    }

    insertAt(index,value){
        if(index === 0){
            this.prepend(value)
        }else if(index ===this.size){
            this.append(value)
        }else{
            const node = new Node(value)
            let curr = this.head
            for(let i=0;i<index;i++){
                curr =curr.next
            }
            node.next = curr
            node.prev =curr.prev
            curr.prev.next = node
            curr.prev = node

            this.size++
        }
        
    }


    insertAfter(target,value){
        const node = new Node(value)
        let curr = this.head
        while(curr.value!=target){
           curr = curr.next
        }
        node.next = curr.next
        node.prev = curr
        curr.next.prev = node
        curr.next = node

        this.size++;
    }

    insertBefore(target,value){
        if(this.head.value===target){
            this.prepend(value);
        }else{
        const node = new Node(value)
        let curr = this.head 
        while(curr.value!=target){
            curr = curr.next
        }

        node.next = curr
        node.prev = curr.prev
        curr.prev.next = node
        curr.prev = node
        this.size++
    }
    }

    remove(value){
        if(!this.head)  return ;
        let curr = this.head
        while(curr){
            if(curr.value===value){
                if(curr===this.head){
                this.head = curr.next
                this.head.prev=null
                }else if(curr === this.tail){
                    this.tail = curr.prev
                    this.tail.next = null
                }else{
                    curr.prev.next = curr.next 
                    curr.next.prev = curr.prev
                }
                return;
            }
            curr = curr.next
        }
    }

    dupremove(){
        
        if(this.size === 0) {
            console.log('empty')
        } else {
            let arr = [];
            let curr = this.head
            while(curr) {
            if(arr.includes(curr.value)) {
                this.remove(curr.value)
            } else {
                arr.push(curr.value)
            }
            curr = curr.next
        }
        }
    }

    merge(l2){
        let dummy = new Node(0)
        let curr = dummy
        let p1 = this.head
        let p2 = l2.head
        while(p1!=null && p2!=null){
            if(p1.value<p2.value){
                curr.next = p1
                p1 = p1.next
            }else{
                curr.next = p2
                p2 = p2.next
            }
            curr = curr.next
        }

        if(p1!=null){
            curr = curr.next = p1
        }else{
            curr.next = p2
        }
        this.head = dummy.next
    }


 


    print(){
        let curr = this.head 
        let result = []
        while(curr){
            result.push(curr.value)
            curr = curr.next
        }

        console.log(result.join(' <-> '));
    }

    
}



const list = new LinkedList
list.prepend(2)
list.prepend(4)
list.prepend(6)
list.append(1)
list.append(3)
list.append(5)
list.insertAt(3,7)
list.insertAfter(2,8)
list.prepend(6)
list.remove(3)
list.append(1)
list.append(3)
list.append(5)
list.insertAt(3,7)
list.insertAfter(2,8)
list.prepend(6)
list.append(3)
list.insertBefore(7,9)
list.dupremove()
list.print()


const list2 = new LinkedList;
list2.prepend(12)
list2.prepend(24)
list2.prepend(36)

list2.print();
list.merge(list2);
list.print();
