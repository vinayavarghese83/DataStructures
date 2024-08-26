class Graph
{
    constructor()
    {
        this.adjacencyList ={}
    }

    //1. first add vertex as a key and an empty array as value
    //2. add edges in the vertex added in the adjacencyList which s empty array at first
    
    //3. add one more vertex to link an edge
    //4/ add edges with pair of vertices
    
    //using array as value
    addVertexArr(v)
    {
        if(!this.adjacencyList[v])
        {
            //we need to add a key as vertex 
            //and then in the values array need to add edges
            this.adjacencyList[v]  = {}  //added the key and value as an empty array
        }
    }
    //using set as value
    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = new Set()
        }
    }
    addEdge(v1,v2)
    {

        if(!this.adjacencyList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }

        // this.adjacencyList[v1].add(v2) 
        this.adjacencyList[v1].add(v2)
        //since its undirected graph, 
        //in Ath position add B and in Bth position add 'A'
        this.adjacencyList[v2].add(v1)
    }

    // display()
    // {
    //     console.log(this.adjacencyList)
    // }

    display(){
        for( let vertex in this.adjacencyList){
            console.log(vertex + "->"+ [...this.adjacencyList[vertex]])
        }
    }


    hasEdge(v1,v2){
        return (this.adjacencyList[v1].has(v2)&& this.adjacencyList[v2].has(v1))
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        // this.adjacencyList[v1].delete(v2)
        
        this.adjacencyList[v2].delete(v1)
    }   

    removeVertex(v)
    {
        if(!this.adjacencyList[v])
        {
            return    
        }

        for(let linkedVertex of this.adjacencyList[v])
        {
            this.removeEdge(v,linkedVertex)
        }

        delete this.adjacencyList[v]
    }

   
}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.display()

graph.removeVertex('A')

graph.display()


