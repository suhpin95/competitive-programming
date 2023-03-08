/**
 * Construct cost of MST using Prims Alog's
 */
class Node{
    constructor(){
        this.values = [];
    }
    
}
class MST{
    constructor(){
        this.graph = {};
        this.cost = Number.MAX_SAFE_INTEGER;
    }
    constructGraph(adjacencyMatrix){
        const ROW = adjacencyMatrix.length;
        const COL = adjacencyMatrix[0].length;
        
        for(let i = 0; i < ROW; i++){
            this.graph[i]=[];
        }

        for(let i = 0; i < ROW; i++){
            for(let j = 0; j < COL; j++){
                if(adjacencyMatrix[i][j] != 0){
                    this.graph[i].push(new Node(j, adjacencyMatrix[i][j]));
                }

            }
        }
    }
    getCost(){
        return this.cost;
    }
    getGraph(){
        return this.graph;
    }
    prims(){
        /** 
         * In MST there are v-1 edges
        */

        /**
         * 
         */

    }
}

let adjacencyMatrix = [ 
[ 0, 2, 0, 6, 0 ],
[ 2, 0, 3, 8, 5 ],
[ 0, 3, 0, 0, 7 ],
[ 6, 8, 0, 0, 9 ],
[ 0, 5, 7, 9, 0 ] 
]

let mst = new MST();
mst.constructGraph(adjacencyMatrix);

console.log(mst.getGraph())