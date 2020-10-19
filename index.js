const myfs = require('fs');
var num = 14;
var s;

if(((num % 2) == 0) || (num == 0)){
    s = num + ' is even.';
    console.log(num + ' is even.');
}else{
    s = num + ' is odd.';
    console.log(num + ' is odd.');
}

myfs.appendFile('EvenOrOdd.txt', (s+'\n'), (e)=>{
    if(e)throw e;
})