/*
* @Author: Nenad
* @Date:   2018-04-12 21:53:37
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-12 21:53:51
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

function jumpingOnClouds(c) {
    // Complete this function

    var steps = 0;
    var position = 0;

    while (position !== c.length - 1) {
        if (position + 2 >= c.length) {
            position++;
            steps++;
        } else {
            if (c[position + 2] === 1) {
                position++;
                steps++;
            } else {
                position += 2;
                steps++;
            }
        }
    }

    return steps;
}

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var result = jumpingOnClouds(c);
    process.stdout.write("" + result + "\n");

}
