class Graph{
    constructor(size){
       this.size=size;
       this.list=[];
       for(let i=0;i<this.size;i++){
         this.list[i]=[];
         for(let j=0;j<this.size;j++){
             this.list[i][j]=0;
         }
       }
    }
    addEdge(i,j){
         this.list[i][j]=1;
         this.list[j][i]=1;
    }
    displayGraph(){
        for(let i=0;i<this.size;i++){
            console.log(this.list[i].join(' '));
        }
    }
}
let graph=new Graph(5);
graph.addEdge(1,2);
graph.addEdge(3,2);
graph.addEdge(1,0);
graph.addEdge(3,4);
graph.addEdge(2,4);
graph.addEdge(3,0);
graph.addEdge(1,4);
graph.displayGraph();