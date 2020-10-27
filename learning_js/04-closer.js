// 함수를 리턴하는 형태

function getCloser(k){
    const plus = (a,b) => {
        return a+b;
    }
    const minus = (a,b) => {
        return a-b;
    }
    if (k === '+'){
        return plus;
    }
    else if (k === '-') {
        return minus;
    }
}
const plus = getCloser('+')
console.log(plus(1,2))
const minus = getCloser('-')
console.log(minus(1,2))