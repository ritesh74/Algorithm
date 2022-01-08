// selection sort
// function sortElement(arr) {
//     for(let i = 0; i<arr.length; i++) {
//         for(let j = i+1; j <arr.length; j++) {
//             if(arr[i]< arr[j]) {
//                 const temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }

//     }
//     return arr;
// }

// console.log(sortElement([1,3,4,2,7,5,3]));

//insertion sort

// function insertionSort(arr) {
//     for(let i = 1; i<arr.length; i++) {
//         for(let j=0; j<i;j++) {
//             if(arr[i] < arr[j]) {
//                 const temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(insertionSort([1,3,4,2,7,5,3]));



//kadane's algorithm

// const myFn = function () {
  
//   const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
//   let eachMax = 0;
//   let total = 0;
//   arr.forEach(item => {
//     eachMax = eachMax + item;
//     if(eachMax<0) {
//       eachMax=0;
//     }
//     if(total<eachMax) {
//       total = eachMax;
//     }
    
//   })
//   console.log(total);
// }

// myFn();





//  Floyd's Cycle Detection Algorithm
// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null
//   }
//   }
  
  
//   const start = new Node(1);
//   const second = new Node(2);
//   start.next = second;
//   let pointer = second
//   const third = new Node(3);
//   pointer.next = third;
//   pointer = third;
  
//   const forth = new Node(4);
//   pointer.next = forth;
//   pointer = forth;
  
//   const fifth = new Node(5);
//   pointer.next = fifth;
//   pointer = fifth;
  
//   // fifth.next = second;
  
//   console.log(start);

//   let firstPointer = start;
//   let secondPointer = start.next;

//   while(firstPointer.next !== null && secondPointer.next !== null) {
   
//     if(firstPointer.value === secondPointer.value) {
//       console.log('loop found');
//       break;
//     } 
//     console.log(firstPointer.value,secondPointer.value);
//     firstPointer = firstPointer.next;
//     secondPointer = secondPointer.next.next;
//   }

