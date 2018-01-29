/*
* @Author: Nenad
* @Date:   2018-01-29 00:37:15
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-29 00:51:39
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

function funnyString(s) {
    // Complete this function

    for (var i = 1; i < s.length; i++) {
        //console.log(s.charCodeAt(i) - s.charCodeAt(i - 1), s[i], s[i - 1]);
        //console.log(s.charCodeAt(s.length - i - 1) - s.charCodeAt(s.length - i), s[s.length - i - 1], s[s.length - i]);
        if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) !== Math.abs(s.charCodeAt(s.length - i - 1) - s.charCodeAt(s.length - i))) {
            return "Not Funny";
        }
    }

    return "Funny";
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = funnyString(s);
        process.stdout.write("" + result + "\n");
    }

}
