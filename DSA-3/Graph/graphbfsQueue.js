//BFS Traversal  - Finally after all visited you will get a Spanning Tree(subset of TRee)

class Graph{

    constructor()
    {
        this.list ={}
        //this list is to create Graph 1st .
    }

    addVertex(v)
    {
        if(!this.list[v])
        {
            // adding key  - this.list[v]
            //and set value to empty set array
            this.list[v] =  new Set()
        }
    }

    addEdge(v1,v2)
    {
        //vertex1's adjacent nodes to be added.
        if(this.list[v1])
        {
            this.addVertex(v1)
        }
        if(!this.list[v2]){
            this.addVertex(v2);
       }
        this.list[v1].add(v2)
        this.list[v2].add(v1)
        // console.log(this.list[v1])
    }

    bfs(startNode) {
        let queue = [];

        queue.push(startNode)
        
        let visited = new Set();
        visited.add(startNode)

         console.log("Traversed  using bsf - end result -> spanning tree " )

        while(queue.length > 0)
        {
            let nodeDeleted = queue.shift()
            console.log(nodeDeleted)
            // console.log("deleted",nodeDeleted)

            //find neighbours and add to queue

            for ( let neighbour of this.list[nodeDeleted])
            {
                if(! visited.has(neighbour))
                {
                    visited.add(neighbour)
                    
                    queue.push(neighbour)
                    // console.log("visited,queue",visited,queue)

                }
            }      
        }   
    }

    display()
    {
        for(let i =0 ;i < this.list.length;i++)
        {
            console.log(this.list[i].join(" "))
        }

        for(let vertex in this.list){
            console.log(vertex +" -- > "+ [...this.list[vertex]]);
       }
    }

    //traversing or visiting each nodes..



}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A" ,"B")
graph.addEdge("A" ,"C")
graph.addEdge("B" ,"C")
graph.addEdge("C" ,"D")
graph.addEdge('A','D');
graph.display()
graph.bfs('A')
