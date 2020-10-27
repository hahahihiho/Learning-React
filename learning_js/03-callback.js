
const a = () => {
    console.log(1)
}

setInterval(a,1000);

// callback
const useCallback = (a,b,func_for_ab) => {
    const result = func_for_ab(a,b);
    return result;
}

const sum = (a,b) => {
    return a+b;
}
let p = useCallback(1,10,sum);
console.log(p)