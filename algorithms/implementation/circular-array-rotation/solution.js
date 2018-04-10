/*
* @Author: Nenad
* @Date:   2018-04-10 22:15:25
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-10 22:15:38
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

function circularArrayRotation(a, m, k) {
    // Complete this function

    //console.log(a, m, k);

    k = k % a.length;

    var tmp;
    var result = [];

    for (var i = 0; i < m.length; i++) {
        tmp = m[i] - k;

        if (tmp < 0) {
            result.push(a[a.length + tmp]);
        } else {
            result.push(a[tmp]);
        }
    }

    return result;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    var m = [];
    for(var m_i = 0; m_i < q; m_i++){
       m[m_i] = parseInt(readLine());
    }
    var result = circularArrayRotation(a, m, k);
    console.log(result.join("\n"));



}
