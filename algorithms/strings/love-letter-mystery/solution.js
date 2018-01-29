/*
* @Author: Nenad
* @Date:   2018-01-29 01:16:01
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-29 01:16:20
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

function theLoveLetterMystery(s) {
    // Complete this function

    var diff = 0;

    for (var i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            diff += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i));
        }
    }

    return diff;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = theLoveLetterMystery(s);
        process.stdout.write("" + result + "\n");
    }

}
