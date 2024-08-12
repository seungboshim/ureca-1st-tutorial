/** 16장 */
const person = {
    name: "승보",
    lastName: "싱",

    get fullName() {
        return `${this.lastName} ${this.name}`;
    },
    set fullName(name) {
        [this.lastName, this.name] = name.split(" ");
    }
}

person.age = 20;

console.log(person); // { name: '승보', age: 20 }
console.log(Object.getOwnPropertyDescriptors(person)); // { name: { value: '승보', writable: true, enumerable: true, configurable: true }, age: { value: 20, writable: true, enumerable: true, configurable: true } }

console.log(person.fullName); // 싱 승보
person.fullName = "짐 승보";
console.log(person.fullName); // 짐 승보

console.log(person)
Object.preventExtensions(person); // 이제 확장 불가
person.newProp = "newProp"; // 무시됨
console.log(person)

/** 17장 */
const circle1 = {
    radius: 5,
    getDiameter() {
        return this.radius * 2;
    }
}
const circle2 = {
    radius: 10,
    getDiameter() {
        return this.radius * 2;
    }
}

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = () => {
        return this.radius * 2;
    }
}
const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle1.getDiameter(), circle2.getDiameter(), circle3.getDiameter(), circle4.getDiameter());
const circle5 = Circle(15);
console.log(circle5); // undefined
console.log(radius)


/** 18장 */

// 유사 배열 객체?
const arr = [1, 2, 3];
const str = "123";
// const nodeList = document.querySelectorAll("div");


/** 19장 */


Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}
const circle6 = new Circle(5);
const circle7 = new Circle(10);

console.log(circle6.getArea());
console.log(circle7.getArea());