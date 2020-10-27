const data = {'a':1,'b':2,'c':3,'d':4};

// const keys = Object.getOwnPropertyNames(data);
// console.debug(keys);
// console.debug(data);

// keys.forEach((v,i) =>{
//     console.debug(v,i);
// })

// for(let k in data){
//     console.debug(k,data[k]);
// }

for(let k in data){
    if (['a','b'].indexOf(k)>=0){
        console.log(k)
    }
}
console.log('a'in ['a','b'])

arr1 = [1,2,3,4,5]
arr2 = 