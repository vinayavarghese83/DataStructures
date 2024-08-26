//BFs in Graph
class Graph{
    constructor(){
        this.list={}
    }
   addVertex(vertex){
         if(!this.list[vertex]){
              this.list[vertex]=new Set();
         }
    }
   addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
             this.addVertex(vertex1);
        }
        if(!this.list[vertex2]){
             this.addVertex(vertex2);
        }
        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }
   display(){
        for(let vertex in this.list){
             console.log(vertex +" -- > "+ [...this.list[vertex]]);
        }
    }
    
    //BFS steps
    // 1. step 1 : declare queue
    //2. push startNode to queue
    //3. add to visitedSet the same startNode
    //4. while loop (queue.length >0
    //5. deque from queue the first element , using shift()) and return the node
    //6.  check the deleted node has neighbours.  inside key value pairs , value is an array of neighbours node
   //7. if not visited add to visited rray and push to queue. continue the same steps.
    
   bfs(startNode) {
        let queue = [];
        queue.push(startNode);
        let visited = new Set();
        visited.add(startNode);
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            for (let neighbor of this.list[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}
let graph=new Graph();
graph.addVertex('A');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('C','D');
graph.addEdge('B','C');
graph.addEdge('A','D');
graph.display();
graph.bfs('D');