/*
* @Author: Nenad
* @Date:   2018-04-14 14:00:29
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-14 14:00:44
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

function beautifulTriplets(d, arr) {
    // Complete this function

    var num = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + d !== arr[j]) {
                continue;
            }
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[j] + d === arr[k]) {
                    num++;
                }
            }
        }
    }

    return num;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var d = parseInt(n_temp[1]);
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = beautifulTriplets(d, arr);
    process.stdout.write("" + result + "\n");

}
