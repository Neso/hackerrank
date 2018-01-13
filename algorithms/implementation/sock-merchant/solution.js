/*
* @Author: Nenad
* @Date:   2018-01-13 13:29:15
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-13 13:29:39
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

function sockMerchant(n, ar) {
    // Complete this function

    var types = {};

    for (var i = 0; i < n; i++) {
        if (types[ar[i]]) {
            types[ar[i]]++;
        } else {
            types[ar[i]] = 1;
        }
    }

    var keys = Object.keys(types);
    //console.log(keys.join(" "));
    var numSold = 0;

    for (var keyId = 0; keyId < keys.length; keyId++) {
        //console.log(types[sockName], sockName);
        numSold += Math.floor(types[keys[keyId]] / 2);
    }

    console.log(numSold);
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    //process.stdout.write("" + result + "\n");

}
