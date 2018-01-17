/*
* @Author: Nenad
* @Date:   2018-01-17 00:47:52
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-17 00:48:14
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

function marcsCakewalk(calorie) {
    // Complete this function

    calorie.sort((a, b) => b - a);

    var miles = 0;

    for (var i = 0; i < calorie.length; i++) {
        miles = miles + calorie[i] * Math.pow(2, i);
    }

    return miles;
}

function main() {
    var n = parseInt(readLine());
    calorie = readLine().split(' ');
    calorie = calorie.map(Number);
    var result = marcsCakewalk(calorie);
    process.stdout.write("" + result + "\n");

}
