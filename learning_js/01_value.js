/**
 * 01_value.js - 변수
 */

/** [ES5] 변수 ------------------------ */
name = "hello";
var age = 10;
var age = 20;

if (true){
    var foo = 10;
}

/** [ES6] 변수 ------------------------ */
let num = 1;
// 변경불가
const URL = "http://www.naver.com";
// 원소변경 가능
const data = {a:123, b:234};
data.a = 100;
// 비구조 문법
 const arr = [1,2,3];
 const [a,b,c] = arr;
// JSON
// key와 변수이름이 동일해야함. 
const json = {first:"hello",second:"world"};
 const {first,second} = json;