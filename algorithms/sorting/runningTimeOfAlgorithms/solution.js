/*
* @Author: Nenad
* @Date:   2018-01-13 23:39:37
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-13 23:39:49
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

function insertionSort2(n, arr) {
    // Complete this function

    var idA = 1;
    var idB = 0;
    var etl;

    var shiftCount = 0;

    while (idA < n) {
        if (arr[idA] < arr[idA - 1]) {
            idB = idA;
            while (idB > 0) {
                if (arr[idB] < arr[idB - 1]) {
                    elt = arr[idB];
                    arr[idB] = arr[idB - 1];
                    arr[idB - 1] = elt;
                    shiftCount++;
                } else {
                    break;
                }
                idB--;
            }
        }

        idA++;
        //console.log(arr.join(" "));
    }

    console.log(shiftCount);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort2(n, arr);

}
