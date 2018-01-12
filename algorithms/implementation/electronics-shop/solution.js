/*
* @Author: Nenad
* @Date:   2018-01-12 08:37:50
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-12 08:38:23
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

function getMoneySpent(keyboards, drives, s){
    // Complete this function
    var maxAmountSpent = -1;
    var sum = 0;

    for (var keyboardId = 0; keyboardId < keyboards.length; keyboardId++) {
        for (var driveId = 0; driveId < drives.length; driveId++) {
            sum = keyboards[keyboardId] + drives[driveId];
            if (sum <= s) {
                if (sum > maxAmountSpent) {
                    maxAmountSpent = sum;
                }
            }
        }
    }

    console.log(maxAmountSpent);
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    drives = readLine().split(' ');
    drives = drives.map(Number);
    //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    var moneySpent = getMoneySpent(keyboards, drives, s);
    //process.stdout.write(""+moneySpent+"\n");

}
