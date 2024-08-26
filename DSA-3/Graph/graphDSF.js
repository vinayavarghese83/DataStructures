class Graph
{
    constructor()
    {
        this.list = {}
    }

    addVertex(v)
    {
        if(!this.list[v])
        {
            this.list[v] = new Set()
        }
    }

    addEdge(v1,v2)
    {
        // this.list[v1].add(v2)
        // this.list[v2].add(v1)

        if(!this.list[v1]){
            this.addVertex(v1);
       }
       if(!this.list[v2]){
            this.addVertex(v2);
       }
       this.list[v1].add(v2);
       this.list[v2].add(v1);
    }

    display()
    {
        for (let vertex in this.list)
        {
            console.log(" Vertex " ,vertex ," -> " , [...this.list[vertex]])
        }
    }

    //dfs is using recursion 
    //no dequeue from list , only adding to visited Set and then checking neighbours 
    //then checks if visistedSet has that neighbour node or not , if not, again calling the same dfs function recirsion.
    //dfs recusion pass startnode to neighbour node in for loop got, visitedarr pass

    dfs(startNode,visited = new Set())
    {
        visited.add(startNode);
        console.log(startNode);

        for(let neighbour in this.list)
        {
            if(!visited.has(neighbour))
            {
                this.dfs(neighbour,visited)
                //addding to visted Array and console the value
            }
        }
    }

}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.display()
graph.dfs("A") 