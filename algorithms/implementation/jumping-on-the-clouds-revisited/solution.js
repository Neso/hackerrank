/*
* @Author: Nenad
* @Date:   2018-04-10 22:27:03
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-10 22:27:17
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

function jumpingOnClouds(c, k) {
    // Complete this function

    var pos = 0;
    var energy = 100;

    do {
        pos = (pos + k) % c.length;

        if (c[pos] === 1) {
            energy -= 2;
        }

        energy--;
    } while (pos !== 0);

    return energy;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var result = jumpingOnClouds(c, k);
    process.stdout.write("" + result + "\n");

}
