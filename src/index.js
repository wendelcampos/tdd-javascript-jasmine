const fizzBuzz = require ("../fizzbuzz");

describe('app', () => {
    it('should process integer', () => {
        expect(fizzBuzz.processInteger(1)).toBe(1);  
        expect(fizzBuzz.processInteger(2)).toBe(2);   
        expect(fizzBuzz.processInteger(3)).toBe('Fizz');  
        expect(fizzBuzz.processInteger(4)).toBe(4); 
        expect(fizzBuzz.processInteger(5)).toBe('Buzz');
        expect(fizzBuzz.processInteger(6)).toBe('Fizz');
        expect(fizzBuzz.processInteger(10)).toBe('Buzz');
        expect(fizzBuzz.processInteger(15)).toBe('FizzBuzz');
    });
});
