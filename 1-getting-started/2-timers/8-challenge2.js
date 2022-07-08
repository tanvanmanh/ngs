// Print "Hello World"
// Every second
// And stop after 5 times
let times = 1;
function helloWorld() {
    console.log('Hello World ' + times);
    times++;

    if (times > 5) {
        console.log("Done");
        clearInterval(this);
    }
}

setInterval(
    helloWorld, 1000

);

// After 5 times. Print "Done" and let Node exit.
