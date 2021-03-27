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
    if(input === 5 || input === "5"){
        return true;
    }
    else{
        return false;
    }
}