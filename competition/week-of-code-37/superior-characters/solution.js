/*
* @Author: Nenad
* @Date:   2018-04-21 21:45:24
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-21 21:46:48
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

// Complete the maximumSuperiorCharacters function below.
function maximumSuperiorCharacters(freq) {
    var numOfChar = 0;
    var chars = 0;

    for (var i = 0; i < freq.length; i++) {
        chars += freq[i];
    }

    var outArray = new Array(chars);

    if (chars < 3) {
        return 0;
    }

    var nextLowLeft = 0;
    var nextLowRight = chars - 1;

    var nextHighLeft = 1;
    var nextHighRight = chars % 2 === 0 ? chars - 3 : chars - 2;

    var remainingChars = chars;

    var backFill;

    var i = 0;

    while (i < 26) {
        console.log(remainingChars, i, /*freq,*/ outArray);

        if (freq[i] > 0) {
            if (outArray[nextHighLeft] === undefined && outArray[nextHighLeft + 1] !== undefined && outArray[nextHighLeft + 1] < i + 1 && outArray[nextHighLeft - 1] < i + 1) {
                freq[i]--;
                remainingChars--;
                outArray[nextHighLeft] = i + 1;
                nextHighLeft += 2;
            } else if (outArray[nextHighRight] === undefined && outArray[nextHighLeft - 1] !== undefined && outArray[nextHighRight + 1] < i + 1 && outArray[nextHighRight - 1] < i + 1) {
                //console.log("test", nextHighRight);
                freq[i]--;
                remainingChars--;
                outArray[nextHighRight] = i + 1;
                nextHighRight -= 2;
            } else {
                console.log(i + 1, outArray[nextLowLeft - 2]);
                console.log(outArray[nextLowLeft - 2], nextLowLeft);

                if (i + 1 === outArray[nextLowLeft - 2] && outArray[nextLowLeft - 3] !== undefined) {
                    console.log("awcond if");

                    if (outArray[nextLowRight + 1] === undefined) {
                        freq[i]--;
                        remainingChars--;
                        outArray[nextLowRight] = i + 1;

                        if (nextLowRight === chars - 1 ** chars % 2 === 0) {
                            nextLowRight -= 1;
                        } else {
                            nextLowRight -= 2;
                        }

                    } else {
                        freq[i]--;
                        remainingChars--;
                        outArray[nextLowRight] = i + 1;
                        if (nextLowRight === chars - 1 ** chars % 2 === 0) {
                            nextLowRight -= 1;
                        } else {
                            nextLowRight -= 2;
                        }
                    }

                } else if (outArray[nextLowLeft] === undefined && nextLowLeft >= 2) {
                    console.log("first if");

                    if (nextLowLeft < chars && outArray[nextLowLeft] === undefined) {
                        freq[i]--;
                        remainingChars--;
                        outArray[nextLowLeft] = i + 1;
                        nextLowLeft += 2;
                    } else {
                        if (!backFill) {
                            backFill = chars - 1;
                            if (outArray[backFill]) {
                                backFill--;
                            }
                        }
                        freq[i]--;
                        remainingChars--;
                        outArray[backFill] = i + 1;
                        backFill -= 2;
                    }
                } else {
                    console.log("else", );
                    if (nextLowLeft >= chars) {
                        freq[i]--;
                        remainingChars--;
                        outArray[nextLowRight] = i + 1;
                        if (nextLowRight === chars - 1 ** chars % 2 === 0) {
                            nextLowRight -= 1;
                        } else {
                            nextLowRight -= 2;
                        }
                    } else {
                        freq[i]--;
                        remainingChars--;
                        outArray[nextLowLeft] = i + 1;
                        nextLowLeft += 2;
                    }
                }
            }
        } else {
            i++;
        }
    }

//     var nextLow = 0;
//     var nextHigh = 1;
//     var backFill;
//     var nextRightLow = 0;

//     for (var i = 0; i < freq.length; i++) {
//         if (freq[i] > 0) {
//             outArray[nextLow] = i + 1;
//             freq[i]--;
//             i--;
//             nextLow += 2;
//             if (nextLow > 2) {
//                 break;
//             }
//         }
//     }

//     for (var i = 0; i < freq.length; i++) {
//         //console.log(freq, outArray);

//         if (freq[i] > 0) {
//             if (outArray[nextHigh + 1] !== undefined && outArray[nextHigh + 1] < i + 1 && outArray[nextHigh - 1] < i + 1) {
//                 freq[i]--;
//                 outArray[nextHigh] = i + 1;
//                 nextHigh += 2;
//             } else {
//                 if (nextLow < chars) {
//                     freq[i]--;s
//                     outArray[nextLow] = i + 1;
//                     nextLow += 2;
//                 } else {
//                     if (!backFill) {
//                         backFill = chars - 1;
//                         if (outArray[backFill]) {
//                             backFill--;
//                         }
//                     }
//                     freq[i]--;
//                     outArray[backFill] = i + 1;
//                     backFill -= 2;

//                 }
//             }

//             i--;
//         }
//     }

//     console.log(outArray);

    var result = 0;

    for (var i = 1; i < outArray.length; i += 2) {
        if (outArray[i - 1] < outArray[i] && outArray[i + 1] < outArray[i]) {
            result++;
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const freq = readLine().split(' ').map(freqTemp => parseInt(freqTemp, 10));

        let result = maximumSuperiorCharacters(freq);

        ws.write(result + "\n");
    }

    ws.end();
}
