/*
* @Author: Nenad
* @Date:   2018-01-10 22:51:06
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-10 22:51:20
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

function migratoryBirds(n, ar) {
    // Complete this function

    var types = {};
    var maxNum = 1;

    for (var i = 0; i < n; i++) {
        if (types[ar[i]]) {
            types[ar[i]]++;
            if (types[ar[i]] >= maxNum) {
                maxNum = types[ar[i]];
            }
        } else {
            types[ar[i]] = 1;
        }
    }

    var keys = Object.keys(types);
    var typeMin = 1000000;

    for (var j = 0; j < keys.length; j++) {
        if (maxNum === types[keys[j]] && typeMin > keys[j]) {
            typeMin = keys[j];
        }
    }

    console.log(typeMin);
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    //process.stdout.write("" + result + "\n");

}
