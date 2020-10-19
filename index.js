const myfs = require('fs');
const myOp = require('./operations');
var num = 20;
var s;

s = myOp.evenOrOdd(num);
console.log(s);

myfs.appendFile('EvenOrOdd.txt', (s+'\n'), (e)=>{
    if(e)throw e;
})