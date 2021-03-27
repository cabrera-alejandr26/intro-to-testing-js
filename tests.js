// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() { //Here we are explaining what the function should do
      expect(typeof helloWorld).toBe('function'); //We expect the name helloWorld .toBe a function
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string"); //Inside the function name helloWorld() we expect it to be a string
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");//Inside this function we expect the return to be a "Hello, World" string.
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined); //Notice that before the .toBe we used not. in order to expect to not get an undefined answer.
    });
});

describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('Should return the string "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!"', function (){
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!"', function(){
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    it('should return the string "Hello, World!"', function(){
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" if true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World" if false', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function(){
         expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed the number 5', function (){
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the string "5"', function (){
        expect((isFive("5"))).toBe(true);
    })
});

describe('isEven', function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true, if number is even', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return false, if number is odd', function(){
        expect(isEven()).toBe(false);
    });

});

describe('isVowel', function(){
    it('should be a defined function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if string is a vowel', function(){
        expect(isVowel("a" || "e" || "i" || "o" || "u")).toBe(true);
    });
    it('should return false if string is not a vowel', function(){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return true if isVowel("a")', function(){
        expect(isVowel('a')).toBe(true);
    });
    it('should return true if isVowel("A")', function(){
        expect(isVowel('A')).toBe(true);
    });
    it('should return false if isVowel("y")', function(){
        expect(isVowel('y')).toBe(false);
    });
    it('should return false if isVowel(true)', function(){
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if isVowel(false)', function(){
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if input is a number', function(){
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
    it('should return a number when called', function(){
        expect(typeof add()).toBe('boolean');
    });
    it('should return the addition of 2 & 3', function(){
        expect(add(2,3)).toBe(5);
    });
    it('should return the addition of -3 & -9', function(){
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return the addition of "5" & 6', function(){
        expect(add("5",6)).toBe(11);
    });
    it('should return the addition of "-4" & "10"', function(){
        expect(add("-4","10")).toBe(6);
    });
    it('should return the addition of "banana" & "split" as NaN', function(){
        expect(add("banana","split")).toBe(true);
    });
    it('should return the addition of 2 & "apples"" as NaN', function() {
        expect(add(2, "apples")).toBe(true);
    });
    it('should return add() as NaN', function() {
        expect(add()).toBe(true);
    });
});