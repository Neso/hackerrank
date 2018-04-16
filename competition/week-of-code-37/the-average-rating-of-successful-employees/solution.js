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

// Complete the averageOfTopEmployees function below.
function averageOfTopEmployees(rating) {

    var numOfAwarded = 0;
    var sumOfAwarded = 0;

    for (var i = 0; i < rating.length; i++) {
        if (rating[i] >= 90) {
            numOfAwarded++;
            sumOfAwarded += rating[i];
        }
    }

    var result = sumOfAwarded / numOfAwarded;
    result = Math.round(result * 100) / 100;

    var decimal = Math.round((result - Math.floor(result)) * 100);
    var decimalOut;

    if (decimal < 10) {
        decimalOut = "0" + decimal.toString();
    } else {
        decimalOut = decimal.toString();
    }

    console.log(Math.floor(result).toString() + "." + decimalOut);
}

function main() {
    const n = parseInt(readLine(), 10);

    let rating = [];

    for (let ratingItr = 0; ratingItr < n; ratingItr++) {
        const ratingItem = parseInt(readLine(), 10);
        rating.push(ratingItem);
    }

    averageOfTopEmployees(rating);
}
