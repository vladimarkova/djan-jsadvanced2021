// objects and prototypes

// var f_obj = {
//     a: 1
// };
// f_obj.a = 123;
// console.log(f_obj);

// function createObj() {
//     var obj = { };
//     Object.defineProperty(obj, 'test', {
//         get: function() {
//             return 1000;
//         },
//         set: function(newValue) {
//             console.log(newValue);
//         }
//     })
//     return obj;
// }

// var s_obj = createObj();
// s_obj.test = 20; // logs 20, because of console.log(newValue)
// console.log(s_obj.test); // logs 1000, because get function returns 1000

// function personFactory(name, age) {
//     return {
//         name: name,
//         age: age,
//         getData: function() {
//             return 'name ' + name + ' age ' + age;
//         }
//     };
// }

// var f_person = personFactory('Gosho', 29);
// var f_person_data = f_person.getData();
// console.log(f_person_data);

// var objPrototype = {
//     getData: function() {
//         return 100;
//     }
// };

// var t_obj = Object.create(objPrototype, {
//     a: {
//         value: 999,
//         writable: false
//     },
//     b: {
//         configurable: false, 
//         writable: false, 
//         value: function() {
//             console.log('Hello World!');
//         }
//     }
// })

// console.log(t_obj.getData()); // 100
// console.log(t_obj.a); // 999
// t_obj.b(); // 'Hello World!'

// t_obj.a = 777;

// console.log(t_obj.a); // 999

// t_obj.b = function() {
//     console.log('Hello again!');
// }

// t_obj.b(); // Hello World! 

// function Person(name, age) {
//     this.name = name,
//     this.age = age;
// }

// Person.prototype.city = 'Kyustendil';
// Person.prototype.getData = function(param1, param2, param3) {
//     console.log(param1, param2);
//     return 'name: ' + this.name + ' age: ' + this.age;
// }

// var f_person = new Person('Ivan', 28);

// console.log(f_person);
// console.log(f_person.city);
// personData = f_person.getData();
// console.log(personData);

// var fn = Person.prototype.getData;

// f_person.fn = Person.prototype.getData;
// p_data = f_person.fn(); // undefined undefined

// console.log(p_data) // name: 'Ivan' age: 28

// var test_obj = {
//     name: 'testName'
// };

// test_obj.fn = Person.prototype.getData;

// test_result = test_obj.fn();

// console.log(test_result); // name: testName age: undefined 

// f_person.city = 'Plovdov';

// console.log(f_person.city); // Plovdiv

// var fResultString = fn.call(
//     { name: "tName, age: 34" },
//     1, 
//     2
// );

// var sResultString = fn.apply(
//     { name: 'tName', age: 34 },
//     [1 ,2]
// );

// var bFunction = fn.bind(
//     { name: 'tName', age: 34 },
//     1,
//     2
// );

// console.log(fResultString);
// console.log(sResultString);

// var bFunctionResult = bFunction(32, 33, 34);
// console.log(bFunctionResult);

// var s_person = new Person('Anna', 42);
// s_person.city = 'Burgas';

// console.log(s_person.city); // Kyustendil 
// console.log(f_person.city); // Burgas 