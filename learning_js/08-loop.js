
const data = [10,11,12,13];

// for loop -> break; 그 이후의 loop skip
for( let i=0; i<data.length; i++){
    if (i>3){
        break;
    };
    console.log(data[i],i)
}
console.log('-------------------')

// forEach -> return; 그 이후도 계속 run
data.forEach( (v,i) => {
    if (i == 2 ){
        return true;
    };
    console.log(v,i);
})
console.log('-------------------')

// some -> return true -> 순환 종료
data.some((v,i) => {
    if(i==2){
        return true;
    }
    console.log(v,i)
})
console.log('-------------------')

// callback은 비동기 처리를 위해 나옴.
const d1 = [];
for (let i=0; i<data.length; i++){
    d1.push(data[i]+1);
}
console.log(d1);
// map
const d2 = data.map( function(v,i) {
    return v+1;
});
console.log(d2)