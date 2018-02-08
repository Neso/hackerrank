/*
* @Author: Nenad
* @Date:   2018-02-06 20:56:58
* @Last Modified by:   Nenad
* @Last Modified time: 2018-02-06 20:57:12
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

function revisedRussianRoulette(doors) {
    // Complete this function

    var unlockNext = false;
    var numUnlocked = 0;
    var numUnlocks = 0;

    for (var i = 0; i < doors.length; i++) {
        if (doors[i]) {
            doors[i] = 0;
            numUnlocks++;
            numUnlocked++;
            if (doors[i + 1]) {
                doors[i + 1] = 0;
                numUnlocked++;
            }
        }
    }

    return [numUnlocks, numUnlocked];
}

function main() {
    var n = parseInt(readLine());
    doors = readLine().split(' ');
    doors = doors.map(Number);
    var result = revisedRussianRoulette(doors);
    console.log(result.join(" "));
}
