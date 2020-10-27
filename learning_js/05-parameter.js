function foobar(a,b){
    let result = 0;
    if (a!=undefined){result+=a};
    if (b!=undefined){result+=b};
    return result;
}
let log = console.log;

log(foobar(1)); // a만 정의 >> 1
log(foobar(b=1)); // b만 정의 >> 1

function foo(a=0,b=1){
    let result = a+b;
    return result
}

log(foo(1))
log(foo(a=1));
log(foo(b=10));
log(foo());