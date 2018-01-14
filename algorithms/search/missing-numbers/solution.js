/*
* @Author: Nenad
* @Date:   2018-01-14 04:56:54
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-14 04:57:11
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

function missingNumbers(arr, brr) {
    // Complete this function

    brr.sort();
    arr.sort();

    var tmp = [];
    var found = false;
    var arrId = 0;

    for (var i = 0; i < brr.length; i++) {
        for (var j = arrId; j < arr.length; j++) {
            if (brr[i] === arr[j]) {
                found = true;
                arrId = j + 1;
                break;
            }
        }

        if (!found && tmp[tmp.length - 1] !== brr[i]) {
            tmp.push(brr[i]);
        }
        found = false;
    }

    return tmp;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var m = parseInt(readLine());
    brr = readLine().split(' ');
    brr = brr.map(Number);
    var result = missingNumbers(arr, brr);
    console.log(result.join(" "));



}
