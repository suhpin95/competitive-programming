/**
 * Write a number to get fibonnaci series
 */

const fib = (num,result=[]) => {
    // var result = [];
    // for(var i = 0; i < num; i++){
    //     if(i === 0 || i === 1){
    //         result.push(1);
    //     } else {
    //         result[i] = result[i-1] + result[i-2];
    //     }
    // }
    // return result
    if(num <= 1){
        return num;
    }
    else{
        return fib(num-1) + fib(num-2);
    }
}
console.log(fib(10))