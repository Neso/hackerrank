/*
* @Author: Nenad
* @Date:   2018-04-16 00:17:44
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-16 00:18:00
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

function stones(n, a, b) {
    // Complete this function

    n--;

    var out = [];
    var d = {};
    var tmp;

    if (a > b) {
        tmp = a;
        a = b;
        b = tmp;
    }

    for (var i = 0; i <= n; i++) {
        tmp = (n - i) * a + b * i;
        //console.log(tmp);
        if (!d[tmp]) {
            d[tmp] = true;
            out.push(tmp);
        }
    }

    return out;
}

function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine());
        var a = parseInt(readLine());
        var b = parseInt(readLine());
        var result = stones(n, a, b);
        console.log(result.join(" "));


    }

}
