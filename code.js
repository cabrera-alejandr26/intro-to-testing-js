// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function
function sayHello(input) {
    var greeting = "Hello, " + input + "!";
    if(input === true || input === false){
        return "Hello, World!";
    }
    else{
        return greeting;
    }
}

//isFive function
function isFive(input){
    return input === 5 || input === "5";
}

//isEven
function isEven(input){
    if(input % 2 === 0){
        return true;
    }
    else if (input % 2 !== 0){
        return false;
    }
    else{
        return false;
    }
}

//isVowel
function isVowel(input){

    if (input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U'){
        return true;
    }
   if(input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u'){
       return true;
   }
   else{
       return false;
   }
}
console.log(isVowel('A'));
console.log(isVowel('o'));
console.log(isVowel("BANANA"));
console.log(isVowel(false));
console.log(isVowel(5));

//addFunction
function add(x,y){
        var input1 = parseFloat(x);
        var input2 = parseFloat(y);
        var notANum = x + y;

        if(isNaN(notANum) === true){
           return true;

        }
        else{
            return input1 + input2;
        }




}
console.log(add("5",6));
console.log(add(-3, -9));
console.log(add(2, "apples"));
console.log(add());
console.log(add("banana", "split"));
