/*
* @Author: Nenad
* @Date:   2018-01-09 03:28:16
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-09 03:28:55
*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function divisibleSumPairs(n, k, ar) {
    // Complete this function

    var numPairs = 0;

    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                numPairs++;
            }
        }
    }

    console.log(numPairs);
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(n, k, ar);
    //process.stdout.write("" + result + "\n");

}
