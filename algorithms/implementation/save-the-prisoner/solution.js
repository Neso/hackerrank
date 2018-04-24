/*
* @Author: Nenad
* @Date:   2018-04-25 00:32:20
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-25 00:32:42
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

function saveThePrisoner(n, m, s){
    // Complete this function

    //n - number of prisoners
    //m - number of sweets
    //s - start chair

    var tmp = (m + s - 1) % n;

    if (tmp === 0) {
        return n;
    } else {
        return tmp;
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        var result = saveThePrisoner(n, m, s);
        process.stdout.write(""+result+"\n");
    }

}
