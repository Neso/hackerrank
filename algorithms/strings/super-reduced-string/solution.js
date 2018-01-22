/*
* @Author: Nenad
* @Date:   2018-01-22 03:18:45
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-22 03:19:04
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

function super_reduced_string(s){
    // Complete this function

    var i = 0;
    var a = s.split("");
    //console.log(s);
    while (i < s.length - 1) {
        if (s[i] === s[i + 1]) {
            a.splice(i, 2);
            s = a.join("");
            i = 0;
            continue;
        }
        i++;
    }

    if (s.length === 0) {
        s = "Empty String";
    }

    return s;
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}
