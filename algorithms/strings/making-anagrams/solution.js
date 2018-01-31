/*
* @Author: Nenad
* @Date:   2018-01-31 21:48:32
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-31 21:48:56
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

function makingAnagrams(s1, s2){
    // Complete this function

    //reused parts of code from previous challange
    var a = {};
    var b = {};

    for (var i = 0; i < s1.length; i++) {
        //console.log(a[s[i]], b[s[s.length - i - 1]]);
        if (!a[s1[i]]) {
            a[s1[i]] = 1;
        } else {
            a[s1[i]]++;
        }
    }

    for (var i = 0; i < s2.length; i++) {
        //console.log(a[s[i]], b[s[s.length - i - 1]]);
        if (!b[s2[i]]) {
            b[s2[i]] = 1;
        } else {
            b[s2[i]]++;
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

            changes += Math.abs(a[keys[i]] - b[keys[i]]);
            delete b[keys[i]];
        }
    }

    keys = Object.keys(b);

    for (var i = 0; i < keys.length; i++) {
        if (a[keys[i]] !== b[keys[i]]) {
            if (!a[keys[i]]) {
                a[keys[i]] = 0;
            }

            changes += Math.abs(a[keys[i]] - b[keys[i]]);
        }
    }


    return changes;

}

function main() {
    var s1 = readLine();
    var s2 = readLine();
    var result = makingAnagrams(s1, s2);
    process.stdout.write("" + result + "\n");

}
