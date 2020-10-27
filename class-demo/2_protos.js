class Protos {
    constructor(){
        this._name = null;
        this._power = null;
    }
    //class 내부 function 없이 함수정의가능, 화살표함수 x
    attack(target) {
        console.log("%s(이)가 %(을)를 %d의 힘으로 공격합니다.",this._name,target,this._power);
    }
}

const p1 = new Protos();
p1._name = '드라군';
p1._power = 100;
p1.attack('마린')

// 상속 에베베 몰라
class Zealot extends Protos{
    constructor(){
        this._name = '질럿';
        this._power = 20;
    }
    ground(target){
        this.attack(target)
    }
    air(target){}
}
class Dragon extends Protos{
    ground(target){
        this.attack(target/2)
    }
    air(target){
        this.attack(target*2)
    }
}

const z1 = new Zealot();
const z2 = new Zealot();
const d1 = new Dragon();
console.log(z1.ground('마린'))
console.log(z1.air('파리'))
console.log(d1.ground('마린'))
console.log(d1.air('파리'))


const group = [z1,z2,d1];
const target = '적';
//위에서 ground air로 했지만, foo, bar 로
group.forEach((item, index) => {
    item.attack(target);
    if (item instanceof Zealot){
        item.foo(target)
    }else {
        item.bar(target)
    }
})