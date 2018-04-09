/*
* @Author: Nenad
* @Date:   2018-04-09 23:24:27
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-09 23:25:02
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

function viralAdvertising(n) {
    // Complete this function

    var days = 1;
    var totalCount = 0;
    var people = 5;
    var tmp;

    while (days <= n) {
        tmp = Math.floor(people / 2)
        totalCount += tmp;
        people = tmp * 3;
        days++;
    }

    return totalCount;
}

function main() {
    var n = parseInt(readLine());
    var result = viralAdvertising(n);
    process.stdout.write("" + result + "\n");

}
