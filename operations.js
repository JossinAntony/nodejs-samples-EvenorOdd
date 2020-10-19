module.exports.evenOrOdd = (num)=>{
    if(((num % 2) == 0) || (num == 0)){
        s = num + ' is even.';
        //console.log(num + ' is even.');
    }else{
        s = num + ' is odd.';
        //console.log(num + ' is odd.');
    }
    return s;
}