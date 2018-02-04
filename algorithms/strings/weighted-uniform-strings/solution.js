/*
* @Author: Nenad
* @Date:   2018-02-04 00:12:12
* @Last Modified by:   Nenad
* @Last Modified time: 2018-02-04 16:42:40
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

function main() {
    var s = readLine();
    var n = parseInt(readLine());

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
    var test = false;

    for(var a0 = 0; a0 < n; a0++){
        test = false;
        var x = parseInt(readLine());
        // your code goes here

        //console.log(x);
        for (var i = 0; i < keys.length; i++) {
            //console.log(a[keys[i]], keys[i].charCodeAt(0) - 96);
/*a[keys[i]] >= x && */
            if (x !== 1 && keys[i] !== "a" && x / (keys[i].charCodeAt(0) - 96) <= a[keys[i]] && (x % (keys[i].charCodeAt(0) - 96)) === 0) {
                console.log("Yes");
                test = true;
                break;
            } else if (x === 1 && keys[i] === "a") {
                console.log("Yes");
                test = true;
                break;
            }
        }

        if (!test) {
            console.log("No");
        }
    }

}
