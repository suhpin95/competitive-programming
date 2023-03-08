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

let n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0

var findCheapestPrice = function(n, flights, src, dst, k) {
    // adjList
    const graph = {};
    for(let i = 0; i< n; i++){
        graph[i] = new Array();
    }
    for(const[src, dest, weight] of flights){
        graph[src].push([dest, weight]);
    }
    // heap
    console.log(graph)
    let minHeap = [];
    minHeap.push([src, 0, 0]);
    // go until dest

    let stops = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let result = 0;
    while(minHeap.length){
        console.log(`[${stops}]`+" heap:- "+ minHeap)
        let[node, cost, steps] = minHeap.shift();
        if(steps > k + 1 || steps > stops[node])continue;
        stops[node] = steps;
        result = Math.max(cost, result);
        if(src == dst){
            break;
        }
        if(graph[node].length == 0)continue
        for(let [edge, newCost] of graph[node]){
             //the number of stops exceeds the limit.
                minHeap.push([edge, cost + newCost, steps+1]);
                _sort();
        }
    }


    function _sort (){
        minHeap.sort((a,b) => a[1] - b[1]);
    }
    return result != 0 ? result : -1;
};

console.log(findCheapestPrice(n, flights, src, dst, k));