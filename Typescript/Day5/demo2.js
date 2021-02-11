var a = [1, 2, 3];
var a1 = [2, 3, 4, 5];
var a2 = [];
// for(let i=0;i<a1.length;i++){
//     console.log("Value of array is "+a1[i]);
// }
// console.log("Value of array is "+a1);
// console.log('value of array is '+a1.join('  '));
// console.log('value of array is '+a1.join('#'));
// console.log('value of array is '+a1.join());
// a1.forEach((value,i)=>{
//     console.log("Value of a1 is "+value+" Whose index is "+i);
// })
a1.forEach(function (value, i) {
    console.log("value of a1[" + i + "] whose value is " + a1[i]);
});
// 1 using Push & pop Method => LIFO
var arr = [];
// arr.push(10);
// console.log(arr);
// arr.push(20);
// console.log(arr);
// arr.push(30);
// arr.push(40);
// console.log(arr);
// var temp=arr.pop()
// console.log(arr);
// console.log("value of temp is "+temp);
// 2 using splice method
