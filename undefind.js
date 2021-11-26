/*
    1. variable value not assigned
    2. function but didn't write return anything;
    3. just wrote return but didn't return anything 
    4. parameater that isn't passed
    5. property that doesn't is exist an object;
    6. accessing array element out of range;
    7. accessing deleted array element
    8. explicitly set value to undefiend;
    
*/
// Example First
let first;
console.log(first);

// Example Second
function second(x, y){
    const sum = x + y
}
const result = second(6, 9)
console.log(result);

// Example Third
function add(a, b){
        const sum = a + b;
    if( b < 10){
        return;
    }
    const fun = a * b;
        return fun;
}

const addResult = add(4, 7)
console.log(addResult);

//Example Fourth 
function double(a, b){
        const result = a * 2;
        console.log(b);
        return;
}
double(32)

// Example Fiveth
const fifth = { name:'Shykot', age: 24, job:'Web Developer', location:'Madaripur'}
console.log(fifth.phone);

// Example Sixth
const sixth = [ 12, 13,  14, '43.34', 'shaykot' ]
console.log( sixth[2]);
delete sixth[2];
console.log(sixth[2]);
sixth[2]

// Example Seventh
const seventh = undefined;
console.log(seventh);

// Example Eighth
const myObject = { name:'Shaykot', profession:null}
console.log(myObject.profession);