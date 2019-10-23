// const net = require('net');

const handleUserInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');


    stdin.on("data", (key) => {

        if (key === '\u0003') {
            process.stdout.write("Thanks for using me, ciao!\n");
            process.exit();
        }
    });
}

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');


    // setTimeout();
    // stdin.on("data", (Key) => {

    //     if (key === '\u0003') {
    //         process.stdout.write("Thanks for using me, ciao!\n");
    //         process.exit();
    //     }
    // })
    stdin.resume();
    return stdin;
}



const connect = require('./client')
console.log('Connecting ..');
connect();


setupInput();
handleUserInput();


