var str = "abvcssaads";
const uniqueCount = (str) =>{
    let obj = {}
    for(var char of str){
        obj[char] = (obj[char] ||  0 ) + 1;
    }
    console.log(obj)
}
uniqueCount(str);
