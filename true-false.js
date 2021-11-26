/*
    True:
    1. true
    2. Any kind of string
    3. string in whiteSapce" "
    4. "0" is true
    5. [] array is a turthy
    6. {} object is truth;



    False:
    1. false
    2. empty string ''
    3. 0 zero is false
    4. undefined
    5. NaN
    6. null

anything else that is not falsy will be truthy;

*/
let x  = {};
console.log('value of x', x);
if(x){
    console.log('Variable is Truth');
}
else{
    console.log('variable is False');
}