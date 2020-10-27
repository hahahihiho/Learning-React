// class

class MyClass1 {
    constructor() {
        this.num1 = 1;
        this.num2 = 2;
    }
}

const my1 = new MyClass1();
console.log(my1.num1);
console.log(my1.num2)

/**
 * js에서의
 * getter setter 
 */

class MyClass2 {
    constructor() { this._num1 = null }
    get num1() {
        return this._num1*10
    }
    set num1(value) {
        this._num1 = value+10
    }
}

const my = new MyClass2();
my.num1 = 10 // 20 할당
console.log(my.num1) // 200 출력