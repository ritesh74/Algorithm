// super keyword to extend a class

// class Base {}
// class Good extends Base {}
// class Bad extends Base {
//     constructor() {
//         super();
//         return 'hello';
//     }
//   }
// class AlsoGood extends Base {
//   constructor() {
//     return {a: 5};
//   }
// }


// new Good();
// new AlsoGood();
// new Bad(); // ReferenceError


//function returning function

// function (1)(2)(3)(4)();
// let newFun = function (a) {
//     if(!a) return 1;
//     return function(b) {
//         if(b) {
//             return newFun(a*b);
//         }
//         return a;
//     }
//  }

// console.log(newFun());


// reducer logic

// const arr = [1,2,4,5]
// Array.prototype.reduceVal = function ( fun, initial) {
//     const ar = this;
//     let pre = initial === undefined ? undefined : initial ;
//     for(var i=0; i<ar.length; i++) {   
//          pre = fun(pre, ar[i]);  
//     }
//     console.log(pre);
// }

// function useR(a, b) { 
//     return a+b;
// }

// arr.reduceVal( useR, 10);



// closure
// function counter() {
//     var count  = 1;
//     return function () {
//         return count++;
//     }
// }

// const count = counter();
// count()
// count()
// count()
// console.log(count())