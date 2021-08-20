const FIZZ = "Fizz";
const BUZZ = "Buzz";

module.exports = {
    
    processInteger: function (integer) {
        if(integer % 3 === 0 && integer % 5 === 0){
            return 'FizzBuzz';
        } else if(integer % 3 === 0){
            return 'Fizz';
        }else if (integer % 5 === 0){
            return 'Buzz';
        }else{
            return integer;
        }
    }
}