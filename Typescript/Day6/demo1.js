var arr = [10, 20];
//splice
// arr.splice(0,0,30);
// console.log(arr);
// arr.splice(1,0,50);
// console.log(arr);
// arr.splice(2,0,60,70,80);
// console.log(arr);
// arr.splice(4,1);
// console.log(arr);
// arr.splice(3,2);
// console.log(arr);
// arr.splice(2,1,90);
// console.log(arr);
var arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
//slice => it copied a data from particular location
// var res=arr1.slice(1,5);
// console.log("Original Array "+arr1);
// console.log("Copied Array "+res);
// var res1=arr1.slice(2);
// console.log("Copied Array "+res1);
// var res2=arr1.slice();
// console.log("Copied Array "+res2);
//map 
var arr2 = [2, 3, 4, 5, 6];
var res = arr2.map(function (myvalue) {
    return (myvalue * myvalue);
});
// console.log("Original Array "+arr2);
// console.log("Resultant Array "+res);
var res1 = arr2.map(function (myvalue, i) {
    if (i == 2 || i == 3) {
        return (myvalue * myvalue);
    }
});
// console.log("Resultant Array "+res1.join(" "));
var arr4 = [2.5, 'Angular 8', true, 'Active', false, 45];
console.log(arr4);
// console.log("Type of arr4 is "+typeof arr4);
for (var i = 0; i < arr4.length; i++) {
    console.log("Type of " + typeof arr4[i]);
}
//filter 
