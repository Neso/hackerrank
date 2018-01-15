/*
* @Author: Nenad
* @Date:   2018-01-15 00:25:13
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-15 00:25:31
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

function lonelyinteger(a) {
    // Complete this function

    a.sort();

    for (var i = 0; i < a.length; i+=2) {
        if (a[i] !== a[i + 1]) {
            return a[i];
        }
    }
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = lonelyinteger(a);
    process.stdout.write("" + result + "\n");

}
