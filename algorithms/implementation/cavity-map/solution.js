/*
* @Author: Nenad
* @Date:   2018-04-15 04:10:57
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-15 04:11:23
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

function cavityMap(grid) {
    // Complete this function

    for (var i = 1; i < grid.length - 1; i++) {
        for (var j = 1; j < grid[j].length - 1; j++) {
            if (grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i][j - 1] && grid[i][j] > grid[i][j + 1]) {
                grid[i][j] = "X";
            }
        }
    }

    var g = [];

    for (var i = 0; i < grid.length; i++) {
        g.push(grid[i].join(""));
    }

    return g.join("\n");
}

function main() {
    var n = parseInt(readLine());
    var grid = [];
    for(var grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split("");
    }
    var result = cavityMap(grid);
    console.log(result);

}
