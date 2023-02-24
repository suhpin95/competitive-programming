/**
 * 
 */
numCourses = 2, prerequisites = [[1,0]]
var canFinish = function(numCourses, prerequisites) {
    let graph = {}
    for(let i = 0; i < numCourses; i++){
        graph[i] = new Array();
    }
    for(let [course, pre] of prerequisites){
        graph[course].push(pre);
    }

    for(let i = 0; i < numCourses; i++){
        if(hasCycle(i, graph))return false;
    }
    return true;
}
function hasCycle (course, graph){
    let visistedSet = new Set();
    let result = [];
    const dfs = (course) => {
        if(visistedSet.has(course)) return true;
        if(graph[course].length == 0)return false;
        visistedSet.add(course);
        for(let pre of graph[course]){
            if(dfs(pre))return true;
        }
        visistedSet.delete(course);
        graph[course] = [];
        return false;
    }
    return dfs(course);
}

console.log(canFinish(numCourses, prerequisites));