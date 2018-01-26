/*
* @Author: Nenad
* @Date:   2018-01-26 22:56:25
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-26 22:57:19
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

function main() {
    var n = parseInt(readLine());

    var nameOut = "";
    var diff = -1;

    for(var a0 = 0; a0 < n; a0++){
        var name_temp = readLine().split(' ');
        var name = name_temp[0];
        var d = parseInt(name_temp[1]);
        var j = parseInt(name_temp[2]);

        if (j - d > diff) {
            nameOut = name;
            diff = j - d;
        }
    }
    // Write Your Code Here

    console.log(nameOut, diff);
}
