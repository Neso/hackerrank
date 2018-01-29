/*
* @Author: Nenad
* @Date:   2018-01-29 00:51:17
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-29 00:51:31
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

function beautifulBinaryString(b) {
    // Complete this function

    var changes = 0;

    while (b.indexOf("010") !== -1) {
        //console.log(b, b.indexOf("010"));
        b = b.replace("010", "011");
        changes++;
    }

    return changes;
}

function main() {
    var n = parseInt(readLine());
    var b = readLine();
    var result = beautifulBinaryString(b);
    process.stdout.write("" + result + "\n");

}
