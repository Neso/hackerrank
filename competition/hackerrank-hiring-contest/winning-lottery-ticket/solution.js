/*
* @Author: Nenad
* @Date:   2018-01-26 23:21:42
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-27 00:21:28
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

var map = [];
var template;
var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function winningLotteryTicket(n, tickets) {
    // Complete this function

    var numOfWins = 0;
    for (var i = n - 1; i >= 1; i--) {
        var temp = map[i];
        for (var j = i - 1; j >= 0; j--) {
            if (1023 === (temp | map[j])) {
                //console.log(tickets[i], tickets[j]);
                numOfWins++;
            }
        }
    }

    return numOfWins;
}

function main() {
    var n = parseInt(readLine());
    var tickets = [];
    var tmpi;
    for(var tickets_i = 0; tickets_i < n; tickets_i++){
        tmpi = readLine();
        tickets[tickets_i] = tmpi;

        template = Object.create(o);
        for (var s = tmpi.length - 1; s >= 0; s--) {
            template[tmpi[s]] = 1;
        }
        map.push(parseInt(template.join(""),2));
    }
    var result = winningLotteryTicket(n, tickets);
    process.stdout.write("" + result + "\n");

}
