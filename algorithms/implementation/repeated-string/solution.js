/*
* @Author: Nenad
* @Date:   2018-04-11 21:33:15
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-11 21:33:28
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

function repeatedString(s, n) {
    // Complete this function

    var multi = Math.floor(n / s.length);
    var addon = n % s.length;

    var sum = 0;

    for (var i = 0; i < s.length && i < n; i++) {
        if (s[i] === "a") {
            //console.log(sum, addon, multi);
            if (i + 1 <= addon) {
                sum += multi + 1;
            } else {
                sum += multi;
            }
        }
    }

    return sum;
}

function main() {
    var s = readLine();
    var n = parseInt(readLine());
    var result = repeatedString(s, n);
    process.stdout.write("" + result + "\n");

}
