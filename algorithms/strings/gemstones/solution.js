/*
* @Author: Nenad
* @Date:   2018-01-28 01:17:44
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-28 01:17:59
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

function gemstones(arr){
    // Complete this function

    var gems = {};
    var s = arr[id];

    for (var i = s.length; i >= 0; i--) {
        gems[s[i]] = true;
    }

    var keys = Object.keys(gems);

    for (var i = arr.length - 1; i >= 0; i--) {
        if (i === id) {
            continue;
        }

        for (var j = keys.length - 1; j >= 0; j--) {
            if (arr[i].indexOf(keys[j]) === -1) {
                delete gems[keys[j]];
                keys = Object.keys(gems);
            }
        }
    }

    return keys.length;
}

var id = -1;

function main() {
    var n = parseInt(readLine());
    var arr = [];

    var prep = 101;

    for(var arr_i = 0; arr_i < n; arr_i++){
        arr[arr_i] = readLine();

        if (arr[arr_i].length < prep) {
            id = arr_i;
            prep = arr[arr_i].length
        }
    }
    var result = gemstones(arr);
    process.stdout.write("" + result + "\n");

}
