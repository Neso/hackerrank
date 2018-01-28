/*
* @Author: Nenad
* @Date:   2018-01-28 01:29:46
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-28 01:29:58
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

function alternatingCharacters(s){
    // Complete this function

    var del = 0;

    for (var i = s.length; i >= 1; i--) {
        if (s[i] === s[i - 1]) {
            s[i] = "";
            del++;
        }
    }

    return del;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = alternatingCharacters(s);
        process.stdout.write("" + result + "\n");
    }

}
