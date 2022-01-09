/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // we need to find the fibonaaci number here
    var result = [];

    for(var i = 0; i <= n ; i++){
        if( i === 0 || i === 1 ){ 
            result.push(1);
        } else {
          result[i] = result[i-2] + result[i-1]; 
        }
    }
    // this means we need to use dp so that we can get the previous number
  console.log(result[n])  
};

climbStairs(5)