/*
* @Author: Nenad
* @Date:   2018-04-22 15:47:33
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-22 15:47:47
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
 * Complete the happyLadybugs function below.
 */
function happyLadybugs(b) {
    /*
     * Write your code here.
     */

    var count = {};
    var hasEmpty = false;
    var allHappy = true;

    for (var i = 0; i < b.length; i++) {

        if (i === 0 && b[i] !== b[i + 1]) {
            allHappy = false;
        } else if (b[i] !== b[i - 1] && i === b.length) {
            allHappy = false;
        } else if (b[i] !== b[i + 1] && b[i] !== b[i - 1]) {
            allHappy = false;
        }

        if (b[i] === "_") {
            hasEmpty = true;
            continue;
        }
        if (count[b[i]] === undefined) {
            count[b[i]] = 1;
        } else {
            count[b[i]]++;
        }
    }

    var keys = Object.keys(count);

    if (!hasEmpty && !allHappy) {
        return "NO";
    }

    for (var i = 0; i < keys.length; i++) {
        if (count[keys[i]] === 1) {
            return "NO";
        }
    }

    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}
