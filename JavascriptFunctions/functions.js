function hello() {
    console.log("Hello");
}

function hello2(name) {
    console.log("Hello " + name);
}

function hello3(name) {
    return "Hello " + name;
}

function double(number) {
    return number * 2;
}

function doublePlusThree(number) {
    return double(number) + 3;
}

hello();
hello2("World");
hello3("World");
double(3);
doublePlusThree(2);
