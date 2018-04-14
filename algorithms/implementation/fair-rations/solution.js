/*
* @Author: Nenad
* @Date:   2018-04-14 14:49:20
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-14 14:49:31
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

function fairRations(b) {
    // Complete this function
    var bread = 0;

    for (var i = 0; i < b.length; i++) {
        if (b[i] % 2 !== 0) {
            b[i]++;
            if (i + 1 === b.length) {
                return "NO";
            }
            b[i + 1]++;
            bread += 2;
        }
    }

    return bread;
}

function main() {
    var N = parseInt(readLine());
    B = readLine().split(' ');
    B = B.map(Number);
    var result = fairRations(B);
    process.stdout.write("" + result + "\n");

}
