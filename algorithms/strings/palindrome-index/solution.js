/*
* @Author: Nenad
* @Date:   2018-01-30 01:42:45
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-30 01:43:12
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

function palindromeIndex(s){
    // Complete this function

    for (var i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            if (s[i] === s[s.length - 2 - i] && s[i + 1] === s[s.length - i - 3]) {
                return s.length - 1 - i;
            } else if (s[i + 1] === s[s.length - 1 - i]) {
                return i;
            } else {
                //console.log(s[i], s[s.length - 1 - i]);
            }
        }
    }

    return -1;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = palindromeIndex(s);
        process.stdout.write("" + result + "\n");
    }

}
