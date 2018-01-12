/*
* @Author: Nenad
* @Date:   2018-01-12 08:36:28
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-12 08:36:49
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

function bonAppetit(n, k, b, ar) {
    // Complete this function

    var sumOfShared = 0;

    for (var i = 0; i < n; i++) {
        if (i !== k) {
            sumOfShared += ar[i];
        }
    }

    var halfBill = sumOfShared / 2;

    if (halfBill === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - halfBill);
    }
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var b = parseInt(readLine());
    var result = bonAppetit(n, k, b, ar);
    //process.stdout.write("" + result + "\n");

}
