/*
* @Author: Nenad
* @Date:   2018-02-01 00:51:40
* @Last Modified by:   Nenad
* @Last Modified time: 2018-02-01 00:51:57
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

function gameOfThrones(s){
    // Complete this function

    var a = {};

    for (var i = 0; i < s.length; i++) {
        //console.log(a[s[i]], b[s[s.length - i - 1]]);
        if (!a[s[i]]) {
            a[s[i]] = 1;
        } else {
            a[s[i]]++;
        }
    }

    var keys = Object.keys(a);

    if (s.length % 2 === 0) {
        for (var i = 0; i < keys.length; i++) {
            if (a[keys[i]] % 2 === 1) {
                return "NO";
            }
        }
    } else {
        var check = 0;
        for (var i = 0; i < keys.length; i++) {
            if (a[keys[i]] % 2 === 1) {
                check++;
                if (check > 1) {
                    return "NO";
                }
            }
        }
    }

    return "YES";
}

function main() {
    var s = readLine();
    var result = gameOfThrones(s);
    process.stdout.write("" + result + "\n");

}
