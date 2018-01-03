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

function miniMaxSum(arr) {
    // Complete this function

    var min = arr[0];
    var minPos = 0;
    var max = arr[0];
    var maxPos = 0;

    for (var i = arr.length - 1; i > 0; i--) {
        if (min > arr[i]) {
            min = arr[i];
            minPos = i;
        }
        if (max < arr[i]) {
            max = arr[i];
            maxPos = i;
        }
    }

    var maxArr = arr.slice();
    var minArr = arr.slice();

    maxArr.splice(minPos, 1);
    minArr.splice(maxPos, 1);

    var maxSum = maxArr.reduce((sum, currentValue) => sum + currentValue);
    var minSum = minArr.reduce((sum, currentValue) => sum + currentValue);
    console.log(minSum, maxSum);
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    miniMaxSum(arr);

}
