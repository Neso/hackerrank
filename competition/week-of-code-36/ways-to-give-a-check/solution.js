/*
* @Author: Nenad
* @Date:   2018-02-08 03:52:43
* @Last Modified by:   Nenad
* @Last Modified time: 2018-02-08 03:52:57
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

function waysToGiveACheck(board) {
    // Complete this function

    var kPosition = {
        x: -1,
        y: -1
    };

    var pPosition = [];

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === "k") {
                kPosition.y = i;
                kPosition.x = j;
            } else if (i === 1 && board[i][j] === "P" && board[i - 1][j] === "#") {
                pPosition.push({
                    x: j,
                    y: i
                });
            }
        }
    }

    //console.log(pPosition[0]);

    var knightMoves = [{
        x: -2,
        y: 1
    }, {
        x: 2,
        y: 1
    }, {
        x: -1,
        y: 2
    }, {
        x: 1,
        y: 2
    }];

    for (var i = 0; i < pPosition.length; i++) {
        if (kPosition.y === pPosition[i].y - 1 || kPosition.x === pPosition[i].x) {
            return 2;
        } else if (Math.abs(pPosition[i].x - kPosition.x) === kPosition.y) {
            return 2;
        } else {
            for (var j = 0; j < knightMoves.length; j++) {
                if (pPosition.x + knightMoves[j].x < 0 || pPosition.x + knightMoves[j].x > 7) {
                    continue;
                } else if (pPosition[i].x + knightMoves[j].x === kPosition.x && pPosition[i].y - 1 + knightMoves[j].y === kPosition.y) {
                    return 1;
                }
            }
        }
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var board = [];
        for(board_i = 0; board_i < 8; board_i++){
           board[board_i] = readLine().split('');
        }
        var result = waysToGiveACheck(board);
        process.stdout.write("" + result + "\n");
    }

}
