/*
* @Author: Nenad
* @Date:   2018-01-09 03:34:44
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-09 03:35:04
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

function camelcase(s) {
    // Complete this function

    console.log(s.replace(/[^A-Z]/g, "").length + 1);
}

function main() {
    var s = readLine();
    var result = camelcase(s);
    //process.stdout.write("" + result + "\n");

}
