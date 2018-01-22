/*
* @Author: Nenad
* @Date:   2018-01-22 02:44:35
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-22 02:44:53
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

function marsExploration(s) {
    // Complete this function

    var diff = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] !== "S" && (i % 3 === 0 || i % 3 === 2)) {
            diff++;
        } else if (s[i] !== "O" && i % 3 === 1) {
            diff++;
        }
    }

    return diff;
}

function main() {
    var s = readLine();
    var result = marsExploration(s);
    process.stdout.write("" + result + "\n");

}
