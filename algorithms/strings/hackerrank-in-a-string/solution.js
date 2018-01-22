/*
* @Author: Nenad
* @Date:   2018-01-22 22:37:58
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-22 22:38:18
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

function hackerrankInString(s) {
    // Complete this function

    var hr = "hackerrank";
    var index = 0;
    s.toLowerCase();

    for (var i = 0; i < s.length; i++) {
        if (s[i] === hr[index]) {
            index++;
            if (index === 8) {
                return "YES"
            }
        }
    }

    return "NO";
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = hackerrankInString(s);
        process.stdout.write("" + result + "\n");
    }

}
