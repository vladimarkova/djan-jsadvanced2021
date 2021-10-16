// primitive types

// var a = 1;
// var b = 1;

// console.log('===: ' + (a === b));
// console.log('==: ' + (a == b));

// var c = (a === b);

// console.log('typeof a: ' + typeof a + ' typeof b ' + typeof b);
// console.log(c);

// ----------------------------------------------------------------

// arrays - first part  
// var f_arr = [1, 2, 3];
// var s_arr = [1, 2, 3]; 

// console.log('f_arr === s_arr: ' + (f_arr === s_arr));
// console.log('f_arr == s_arr: ' + (f_arr == s_arr));

// console.log('f_arr[1] === s_arr[1]: ' + (f_arr[1] === s_arr[1]));
// console.log('f_arr[1] == s_arr[1]: ' + (f_arr[1] == s_arr[1]));

// var f_el = f_arr[0];

// console.log(f_el);

// f_el = 5;

// console.log(f_el);

// ----------------------------------------------------------------

// objects 

// var flower = {
//     type: 'magnolia',
//     colour: 'white', 
//     height: 50
// };

// flower.neededWater = 100;

// // flower['growth-per-year'] = 5;

// var propForAddition = 'land';

// // flower[propForAddition] = 'everywhere';

// console.log(flower);

// flower.neededWater = 200;

// console.log(flower);

// // flower['🙋'] = '💚';       

// flower.testProp = 'I am a test prop.'; 

// console.log(flower); 

// // testProp goes undefined, but it is removed as an object property, if we set it null
// // or undefined, it goes so, but remains as an object property
// delete flower.testProp;

// console.log(flower); 

// ----------------------------------------------------------------

// arrays - second part 

// var testArray = [4, 80, 100];

// console.log(testArray + ' length: ' + testArray.length);

// testArray[3] = 50;

// console.log('length: ' + testArray.length);

// testArray[60] = 56;

// console.log('length: ' + testArray.length);

// console.log('arr[42] = ' + testArray[42]);

// console.log(testArray);

// var arr = new Array(4);

// console.log(arr.length);

// arr.length = 5;

// console.log(arr.length);

// function logArray(array) {
//     array.map(function(el) {
//         console.log(el);
//     })
// }

// // shows that we only have five elements
// console.log(arr);

// // shows nothing
// logArray(arr); 

// arr.fill(null);

// // shows five nulls 
// logArray(arr);

// function range(start, end) {
//     var arrLength = end - start;
//     var resArr = new Array(arrLength + 1)
//     .fill(null)
//     .map(function(el, idx, arr) {
//         // console.log(el); total 11 null logs 
//         return start + idx;
//     })    
//     return resArr;
// }

// console.log(range(10, 20));

// map on array does not change the array, returns a new one with the modification, if so  

// function ourMap(arr, fn) {
//     return arr.map(function(el, idx) {
//         return fn(idx, el);
//     })
// }

// var arrayToBeMapped = ['el1', 'el2', 'el3'];

// var mapFn = function(param1, param2) {
//     console.log(param1, param2);
// }

// console.log(arrayToBeMapped.map(mapFn));

// console.log('array: ' + arrayToBeMapped);

// console.log(ourMap(arrayToBeMapped, mapFn));

// console.log('array: ' + arrayToBeMapped);

// var anotherArray = [1, 2, 3, true, [5, 8, 9], 'beautiful day'];

// console.log(anotherArray);

// anotherArray.push(['f', 'o', 'p']);

// console.log(anotherArray); 

// ----------------------------------------------------------------

// some array/object types 

// var objTypeEqArrType = (typeof { 'prop1': 1 } === typeof [1, 2, 3]);

// console.log(objTypeEqArrType);

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray({ 1: 1 }));
// console.log(Array.isArray({ 'prop1': 1 }));

// console.log(typeof { 1: 1 });
// console.log(typeof({ 'prop1': 1 }));

// console.log(typeof [1, 2, 3]);

// var isArray = ([] instanceof Array);

// console.log(isArray);

// var arrToCopy = ['a', 'b', 'c', 'd'];

// console.log(arrToCopy.slice(0, 1));
// console.log(arrToCopy.slice(0, 2));

// var copiedArr = arrToCopy.slice(0);

// console.log(copiedArr);