/*
* @Author: Nenad
* @Date:   2018-01-13 16:11:49
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-13 16:12:02
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

function insertionSort1(n, arr) {
    // Complete this function

    var elt = arr[n - 1];

    for (var i = n - 1; i >= 0; i--) {
        if (i === 0 || arr[i - 1] <= elt) {
            arr[i] = elt;
            console.log(arr.join(" "));
            return;
        } else {
            arr[i] = arr[i - 1];
            console.log(arr.join(" "));
        }
    }
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort1(n, arr);

}
