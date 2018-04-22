/*
* @Author: Nenad
* @Date:   2018-04-22 22:55:49
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-22 22:56:01
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

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Complete this function

    if (y1 > y2) {
        return 10000;
    } else if (y1 === y2) {
        if (m1 > m2) {
            return (m1 - m2) * 500;
        } else if (m1 === m2) {
            if (d1 > d2) {
                return (d1 - d2) * 15;
            } else {
                return 0;
            }
        }
    }

    return 0;
}

function main() {
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);
    var result = libraryFine(d1, m1, y1, d2, m2, y2);
    process.stdout.write("" + result + "\n");

}
