// // const abc = () => {
// //     console.log("abc");
// // }

// function abc() {
//     console.log("abc");
// }

// var abc = 0;

// console.log(abc);



var private = (function() {
    var privateVal = "private";
    function privateFunc() {
        console.log(privateVal);
    }
})

var myModule = (function() {
    var privateVariable = 'private'; 
    function privateFunction() { 
        console.log(privateVariable); 
    } 
    return { 
        publicFunction: function() { 
            privateFunction();
        } 
    }; 
})(); 

console.log(myModule.abc); // 존재하지 않는 프로퍼티 : undefined
        
myModule.publicFunction(); // 'private' 
console.log(myModule.privateVariable) //엥 이거는 근데 왜 undefined지? 
myModule.privateFunction(); // 존재하지 않는 메서드 : TypeError: myModule.privateFunction is not a function