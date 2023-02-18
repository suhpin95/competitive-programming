/**
 * Calculate the minimum number of multiplication required 
 * for Matrix multiplication
 */

const MCM= (array) => {
    const solve = (left, right, arr) => {
        let result = Number.MAX_VALUE;
        if(left == right){
            return 0;
        }
        for(let k = left; k < right; k++){
            let tempAns = solve(left, k, arr)+solve(k + 1, right, arr) + arr[left - 1] * arr[k] * arr[right];
            if (tempAns < result) result = tempAns;
        }
        return result;
    }
    let result = solve(1, array.length - 1, array)
    return result;
}
console.log(MCM([1, 2, 3, 4, 3]))