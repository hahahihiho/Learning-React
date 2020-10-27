
let log = console.log;

// 1. arrow function
let add1 = function(a) {
    return a+100;
}
let add2 = (a) => {
    return a+100;
}
// If there is only one param, () could be removed
let add3 = a => { return a+100; }
// 함수가 한줄이면 {} 와 return 생략가능
let add4 = a => a+100;

// 2.
// set get 을 간단하게 사용 가능
const user = {
    name: null,
    setName: value => { this.name=value; } ,
    getName: value => this.name
}
user.setName('hello')
log(user.getName())

// 3.
// arrow function in jQuery
// this -> e.currentTarget
$("#btn").click(function(e) {
    e.preventDefault();
    $(this).html("hello world");
});

$("#btn").click( e => {
    e.preventDefault();
    $(e.currnetTarget).html("hello world");
});