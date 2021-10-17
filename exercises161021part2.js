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

var objPrototype = {
    getData: function() {
        return 100;
    }
};

var t_obj = Object.create(objPrototype, {
    a: {
        value: 999,
        writable: false
    },
    b: {
        configurable: false, 
        writable: false, 
        value: function() {
            console.log('Hello World!');
        }
    }
})

console.log(t_obj.getData()); // 100
console.log(t_obj.a); // 999
t_obj.b(); // 'Hello World!'

t_obj.a = 777;

console.log(t_obj.a); // 999

t_obj.b = function() {
    console.log('Hello again!');
}

t_obj.b(); // Hello World! 


