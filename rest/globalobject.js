//var buf = new Buffer([10, 20, 30]); // buffer is a global class.

console.log("Console log is also a global console");
console.error("Some error occured");
console.warn("This is the warning message");

const args = process.argv;
console.log(args);
const name = args[2];
console.log("Hello,", name); // while running the file we need to specify the name ie node globalobject.js abc
