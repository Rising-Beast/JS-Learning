// Example 1, Code snippet used in 08_callStack.excalidraw :

function one() {
    console.log("one");
};

function two() {
    console.log("two");
};

function three() {
    console.log("three");
};

one();
two();
three();



// Example 2, Code snippet used in 08_callStack.excalidraw :

function one1() {
    console.log("one1");
    two2();
};

function two2() {
    console.log("two2");
    three3();
};

function three3() {
    console.log("three3");
};

one1();
two2();
three3();