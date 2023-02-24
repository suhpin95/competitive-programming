function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 };
var cloneGraph = function(node) {
    let map = new Map();
    
    const clone = (root) => {
        if(!root)return root;
        if(map.has(root))return map.get(root);
        let copy = new Node(node.val);
        map.set(root, copy);
        for(let next of copy.neighbors){
            copy.neighbors.push(clone(next));
        }
        return copy
    }
    return clone(node)
};

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]))