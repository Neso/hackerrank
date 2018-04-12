/*
* @Author: Nenad
* @Date:   2018-04-12 22:04:20
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-12 22:04:33
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

function equalizeArray(arr) {
    // Complete this function

    var c = {};

    var maxCount = 0;
    maxKey = 0;

    for (var i = 0; i < arr.length; i++) {
        if (!c[arr[i]]) {
            c[arr[i]] = 1;
            if (maxCount < 1) {
                maxCount = 1;
                maxKey = arr[i];
            }
        } else {
            c[arr[i]]++;

            if (maxCount < c[arr[i]]) {
                maxCount = c[arr[i]];
                maxKey = arr[i];
            }
        }
    }

    return arr.length - maxCount;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = equalizeArray(arr);
    process.stdout.write("" + result + "\n");

}
