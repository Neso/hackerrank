/*
* @Author: Nenad
* @Date:   2018-04-14 13:41:29
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-14 13:41:41
*/

'use strict';

const fs = require('fs');
var BigNumber = require('bignumber.js');

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
 * Complete the taumBday function below.
 */
function taumBday(b, w, bc, wc, z) {
    /*
     * Write your code here.
     */

    var totalSpent = 0;

    if (wc.plus(z).isLessThan(bc)) {
        totalSpent = b.times(wc.plus(z)).plus(w.times(wc));
    } else if (bc.plus(z).isLessThan(wc)) {
        totalSpent = b.times(bc).plus(w.times(bc.plus(z)));
    } else {
        totalSpent = b.times(bc).plus(w.times(wc));
    }

    return totalSpent.toString();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const bw = readLine().split(' ');

        const b = new BigNumber(Number(bw[0], 10));

        const w = new BigNumber(Number(bw[1], 10));

        const bcWcz = readLine().split(' ');

        const bc = new BigNumber(Number(bcWcz[0], 10));

        const wc = new BigNumber(Number(bcWcz[1], 10));

        const z = new BigNumber(Number(bcWcz[2], 10));

        let result = taumBday(b, w, bc, wc, z);

        ws.write(result + "\n");
    }

    ws.end();
}
