/*
* @Author: Nenad
* @Date:   2018-04-23 01:47:43
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-23 01:48:16
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

function appendAndDelete(s, t, k) {
    // Complete this function

    var tmp;

    for (var i = 0; i < t.length; i++) {
        if (s[i] !== t[i]) {
            tmp = s.length - i;
            //console.log(i, tmp);
            tmp += t.length - i;
            //console.log(i, tmp);
            if (tmp <= k && ((k - tmp) % 2 === 0 || k - tmp === 3)) {
                return "Yes";
            } else {
                return "No";
            }
        }
    }

    if (s.length === t.length) {
        return "Yes";
    } else if (Math.abs(s.length - t.length) <= k && ((k - Math.abs(s.length - t.length)) % 2 === 0 || (k - Math.abs(s.length - t.length)) === 3)) {
        return "Yes";
    } else {
        return "No";
    }
}

function main() {
    var s = readLine();
    var t = readLine();
    var k = parseInt(readLine());
    var result = appendAndDelete(s, t, k);
    process.stdout.write("" + result + "\n");

}
