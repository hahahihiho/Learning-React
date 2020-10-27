const origin = {a:1,b:10};

// [ES5]
const copy1 = origin
origin.a++;
copy1.b++;
// >> origin = copy1 = {a:2,b:11}
// 각각을 복사해줘야지 깊은 복사가 가능

/** [ES6] 깊은복사 ------------- 
* b 값은 바꿔줌 
*/

const copy3 = {...origin, b: 300};
