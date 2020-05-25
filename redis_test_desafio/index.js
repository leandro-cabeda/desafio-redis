const listTest = require("./test/clientTest");

/*
    Performs all of the contests testing functions in the list
*/
listTest.forEach(testFunction => {
    testFunction();
});