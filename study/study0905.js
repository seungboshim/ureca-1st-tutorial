const str = new String(null);
console.log(str); // [String: 'null']
console.log(typeof(str)) // object

console.log(String(null)); // null
console.log(typeof(String(null))); // string

const strr = "str"
console.log(strr); // str
console.log(typeof(strr)); // string

const str1 = new String("a");
const str2 = new String("a");
console.log(str1==str2);
console.log(typeof(str1), typeof(str2))

let str3 = "hello";
console.log(str3.charAt(1)); // string인데 String의 메소드를 호출할수있는 이유