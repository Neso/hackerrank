/*
* @Author: Nenad
* @Date:   2018-01-14 04:21:26
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-14 04:21:41
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

function icecreamParlor(m, arr) {
    // Complete this function

    var moneySpent = 0;
    var flavorA, flavorB;
    var tmp;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            tmp = arr[i] + arr[j];
            if (tmp === m) {
                console.log(i + 1, j + 1);
                return;
            } else if (tmp <= m && tmp > moneySpent) {
                moneySpent = tmp;
                flavorA = i + 1;
                flavorB = j + 1;
            }
        }
    }

    console.log(flavorA, flavorB);
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = icecreamParlor(m, arr);
        //console.log(result.join(" "));


    }

}
