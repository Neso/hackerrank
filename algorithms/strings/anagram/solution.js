/*
* @Author: Nenad
* @Date:   2018-01-31 20:44:19
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-31 20:44:54
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

function anagram(s){
    // Complete this function

    if (s.length % 2 === 1) {
        return -1;
    }

    var a = {};
    var b = {};

    for (var i = 0; i < s.length / 2; i++) {
        //console.log(a[s[i]], b[s[s.length - i - 1]]);
        if (!a[s[i]]) {
            a[s[i]] = 1;
        } else {
            a[s[i]]++;
        }

        if (!b[s[s.length - i - 1]]) {
            b[s[s.length - i - 1]] = 1;
        } else {
            b[s[s.length - i - 1]]++;
        }
    }

    var keys = Object.keys(a);
    var changes = 0;
    var remainingChanges = 0;
    var temp = 0;

    for (var i = 0; i < keys.length; i++) {
        if (a[keys[i]] !== b[keys[i]]) {
            if (!b[keys[i]]) {
                b[keys[i]] = 0;
            }

            if (a[keys[i]] - b[keys[i]] > 0) {
                changes += a[keys[i]] - b[keys[i]];
            }
        }
    }

    return changes;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = anagram(s);
        process.stdout.write("" + result + "\n");
    }

}
