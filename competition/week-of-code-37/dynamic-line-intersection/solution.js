/*
* @Author: Nenad
* @Date:   2018-04-21 21:47:21
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-21 21:51:10
*/

'use strict';

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
 * Complete the dynamicLineIntersection function below.
 */
function dynamicLineIntersection(n) {
    /*
     * Write your code here.
     */

    var input = 0;

    var eq = {};
    var tmp;
    var read;
    var result;
    var finalResult = {};
    var remove;

    var finalOut = [];

    var nn, num, k;

    var x;
    var y;

    var readArray = [];

    var tObj;

    while (input < n) {
        readArray.push(readLine());
        input++;
    }

    var keys;

    input = 0;

    while (input < n) {
        read = readArray[input];
        //console.log(read);

        tmp = read.split(" ");

        if (tmp[0] === "+") {
            tObj = {
                n: parseInt(tmp[1]),
                k: parseInt(tmp[2])
            };

            if (!eq[tObj.n + "," + tObj.k]) {
                eq[tObj.n + "," + tObj.k] = {
                    tObj: tObj,
                    n: 1
                }
            } else {
                eq[tObj.n + "," + tObj.k].n++;
            }

            finalResult = {};
            keys = null;
        } else if (tmp[0] === "-") {
            remove = {
                n: parseInt(tmp[1]),
                k: parseInt(tmp[2])
            };

            eq[remove.n + "," + remove.k].n--;

            finalResult = {};
            keys = null;
        } else if (tmp[0] === "?") {
            result = 0;
            y = parseInt(tmp[1]);

            if (finalResult[y.toString()] !== undefined) {
                // console.log(finalResult[y.toString()]);
                finalOut.push(finalResult[y.toString()]);
            } else {

                if (!keys) {
                    keys = Object.keys(eq);
                }

                for (var i = 0; i < keys.length; i++) {
                    nn = eq[keys[i]].tObj.n;
                    num = eq[keys[i]].n;
                    k = eq[keys[i]].tObj.k;

                    if (num <= 0) {
                        continue;
                    } else if (nn === 0) {
                        if (k === y) {
                            result += num;
                        } else {
                            continue;
                        }
                    } else if ((y - k) % nn === 0) {
                        result += num;
                    }
                }

                finalResult[y.toString()] = result;

                finalOut.push(finalResult[y.toString()]);
            }
        }

        input++;
    }

    console.log(finalOut.join("\n"));
}

function main() {
    const n = parseInt(readLine(), 10);

    dynamicLineIntersection(n);
}
