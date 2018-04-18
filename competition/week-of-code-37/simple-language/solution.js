/*
* @Author: Nenad
* @Date:   2018-04-18 02:43:49
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-18 02:44:03
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the maximumProgramValue function below.
 */
function maximumProgramValue(n) {
    /*
     * Write your code here.
     */

    //var deletedLines = [];
    var x = 0;
    var input;

    for (var i = 0; i < n; i++) {
        input = readLine().split(" ");

        if (input[0] === "set") {
            if (Number(input[1]) <= x) {
                //deletedLines.push(i + 1);
            } else {
                x = parseInt(input[1]);
            }
        } else if (input[0] === "add") {
            if (Number(input[1]) <= 0) {
                //deletedLines.push(i + 1);
            } else {
                x += parseInt(input[1]);
            }
        }
    }

    return x;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = maximumProgramValue(n);

    ws.write(result + "\n");

    ws.end();
}
