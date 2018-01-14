/*
* @Author: Nenad
* @Date:   2018-01-14 12:07:41
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-14 12:08:09
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

function solve(a){
    // Complete this function

    var sum = a.reduce(function (sum, val) {
        return sum + val;
    });

    var left, mid, right;

    for (var i = 0; i < a.length; i++) {
        if (i === 0) {
            left = 0;
            mid = a[i];
            right = sum - mid;
        } else if (i === a.length - 1) {
            left = sum - mid;
            mid = a[i];
            right = 0;
        } else {
            left += mid;
            right -= a[i];
            mid = a[i];
        }

        if (left === right) {
            console.log("YES");
            return;
        }
    }

    console.log("NO");
}

function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
        var result = solve(a);
        //process.stdout.write(""+result+"\n");
    }

}
