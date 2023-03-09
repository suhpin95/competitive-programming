/**
 * There are n cities connected by some number of flights. 
 * You are given an array flights where flights[i] = 
 * [fromi, toi, pricei] indicates that there is a flight from city fromi to city 
 * toi with cost pricei.
 * You are also given three integers src, dst, and k, return the cheapest price from 
 * src to dst with at most k stops. If there is no such route, return -1.
 * 
 * 
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 
 * src = 0, dst = 3, k = 1
 * Output: 700
 */

let n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1

var findCheapestPrice = function(n, flights, src, dst, k) {
    return dijkstra(n, flights, src, dst, k);
};

const bellManFord = (n, flights, src, dst, k) => {
    /**
     * Improved Bellman ford using dp concept
     */
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;
    for(let i = 0; i <= k; i++){
        let tempPrice = [...prices];
        for(const [s, d, w] of flights){
            if(prices[s] == Infinity)continue;
            if(tempPrice[d] > prices[s] + w){
                tempPrice[d] = prices[s] + w;
            }
        }
        prices = [...tempPrice];
    }
    return prices[dst] == Infinity ? -1: prices[dst];
}

const dijkstra = (n, flights, src, dst, k) => {
    // build adjList
    let graph = {};
    for(let i = 0; i < n; i++){
        graph[i] = new Array();
    }
    for(let [s, dest, w] of flights){
        graph[s].push([dest, w])// push the code dest and weight for the traversal
    }
    let minCost = new Array(n).fill(Infinity);
    minCost[src] = 0;

    // push srcnode, destNode, weight into heap
    let queue = [[src, 0, 0]]; // push the node and weight alongwith it
    // this will act as heap for us
    while(queue.length > 0){

        let [node, cost, stops] = queue.shift();
        if(node === dst)return cost

        if(stops > k)continue;
        for(let [d, weight] of graph[node]){
            let newCost = cost + weight;
            if(newCost < minCost[d]){
                minCost[d] = newCost;
                queue.push([d, newCost, stops+1]);
                _sort();// heapifying it essentially
            }
        }
    }
    function _sort(){
        queue.sort((a,b) => a[1]-b[1]);
    }
    return -1;
}

console.log(findCheapestPrice(n, flights, src, dst, k));