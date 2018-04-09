/*
* @Author: Nenad
* @Date:   2018-04-09 23:40:47
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-09 23:41:21
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

function permutationEquation(p) {
    // Complete this function

    var result = [];

    for (var i = 0; i < p.length; i++) {
        result[p[p[p[i] - 1] - 1] - 1] = p[i];
    }

    return result;
}

function main() {
    var n = parseInt(readLine());
    p = readLine().split(' ');
    p = p.map(Number);
    var result = permutationEquation(p);
    console.log(result.join("\n"));
}
