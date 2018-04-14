/*
* @Author: Nenad
* @Date:   2018-04-14 14:33:01
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-14 14:33:19
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

function flatlandSpaceStations(n, c) {
    // Complete this function

    c.sort(function (a, b) {
        return a - b;
    });

    var begin = c[0];
    var end = n - c[c.length - 1] - 1;

    var maxDistance = begin > end ? begin : end;
    var tmp;

    //console.log(maxDistance, begin, end, c);

    for (var i = 1; i < c.length; i++) {
        tmp = Math.floor((c[i] - c[i - 1]) / 2);
        if (tmp > maxDistance) {
            maxDistance = tmp;
        }
    }

    return maxDistance;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var result = flatlandSpaceStations(n, c);
    process.stdout.write("" + result + "\n");

}
