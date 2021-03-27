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