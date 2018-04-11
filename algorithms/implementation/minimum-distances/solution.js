/*
* @Author: Nenad
* @Date:   2018-04-11 21:44:18
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-11 21:44:31
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

function minimumDistances(a) {
    // Complete this function

    var minDistance = 1001;
    var key = {};
    var tmpDistance;

    for (var i = 0; i < a.length; i++) {
        if (key[a[i]] !== undefined) {
            tmpDistance = i - key[a[i]];

            if (tmpDistance < minDistance) {
                minDistance = tmpDistance;
            }

            key[a[i]] = i;
        } else {
            key[a[i]] = i;
        }
    }

    if (minDistance === 1001) {
        return -1;
    } else {
        return minDistance;
    }
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = minimumDistances(a);
    process.stdout.write("" + result + "\n");

}
