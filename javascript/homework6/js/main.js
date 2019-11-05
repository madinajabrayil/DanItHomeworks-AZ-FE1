function filterBy(data, dataType) {
    let arr = [];
    
    for (let d of data) {
        if (typeof (d) != dataType) {
            arr.push(d);
        }
    }
    return arr;
}
let dataType = prompt('Enter data type:','string');
let data = ['Hello','World',23,null,true,'Nice',568,false];

console.log(filterBy(data,dataType));