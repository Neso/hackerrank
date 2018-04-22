/*
* @Author: Nenad
* @Date:   2018-04-22 15:20:59
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-22 15:22:46
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
 * Complete the strangeCounter function below.
 */
function strangeCounter(t) {
    /*
     * Write your code here.
     */

    //example how to precalculate
    //var i = 3;
    //var j = 1;
    //var arr = [];
    //while (i < 10000000000000) { arr.push({tick: i, value: j}); j= j + i;  i = i * 2; }
    //you can execute prelaculated code in terminal to get array

    //this value was precalculated
    var precalc = [{"tick":3,"value":1},{"tick":6,"value":4},{"tick":12,"value":10},{"tick":24,"value":22},{"tick":48,"value":46},{"tick":96,"value":94},{"tick":192,"value":190},{"tick":384,"value":382},{"tick":768,"value":766},{"tick":1536,"value":1534},{"tick":3072,"value":3070},{"tick":6144,"value":6142},{"tick":12288,"value":12286},{"tick":24576,"value":24574},{"tick":49152,"value":49150},{"tick":98304,"value":98302},{"tick":196608,"value":196606},{"tick":393216,"value":393214},{"tick":786432,"value":786430},{"tick":1572864,"value":1572862},{"tick":3145728,"value":3145726},{"tick":6291456,"value":6291454},{"tick":12582912,"value":12582910},{"tick":25165824,"value":25165822},{"tick":50331648,"value":50331646},{"tick":100663296,"value":100663294},{"tick":201326592,"value":201326590},{"tick":402653184,"value":402653182},{"tick":805306368,"value":805306366},{"tick":1610612736,"value":1610612734},{"tick":3221225472,"value":3221225470},{"tick":6442450944,"value":6442450942},{"tick":12884901888,"value":12884901886},{"tick":25769803776,"value":25769803774},{"tick":51539607552,"value":51539607550},{"tick":103079215104,"value":103079215102},{"tick":206158430208,"value":206158430206},{"tick":412316860416,"value":412316860414},{"tick":824633720832,"value":824633720830},{"tick":1649267441664,"value":1649267441662},{"tick":3298534883328,"value":3298534883326},{"tick":6597069766656,"value":6597069766654}];

    for (var i = 1; i < precalc.length; i++) {
        if (t < precalc[i].value) {
            return precalc[i].value - t;
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    let result = strangeCounter(t);

    ws.write(result + "\n");

    ws.end();
}
