numCourses = 2, prerequisites = [[0,1]]
var canFinish = function(numCourses, prerequisites) {
    let graph = {}
    let result= [];
    for(let i = 0; i < numCourses; i++){
        graph[i] = new Array();
    }
    for(let [course, pre] of prerequisites){
        graph[pre].push(course);
    }
    const visited = new Array(numCourses).fill(0)
   
    function hasCycle(course){
        visited[course] = 1;
        let connections = graph[course];
        if(connections){
            for(let pre of connections){
                if(visited[pre] == 1)return true;
                if(visited[pre] == 0 && hasCycle(pre))return true;
            }
        }
        visited[course] = 2;
        result.push(course)
        return false;
    }
    for(let i = 0; i < numCourses; i++){
        if(visited[i]== 0 && hasCycle(i))return [];
    }
    return result.reverse();
}
console.log(canFinish(numCourses, prerequisites));