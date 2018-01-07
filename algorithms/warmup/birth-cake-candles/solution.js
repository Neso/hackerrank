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

function birthdayCakeCandles(n, ar) {
    // Complete this function

    var maxHeight = 0;
    var numOfHeight = 0;

    for (var i = 0; i < ar.length; i++) {
        if (maxHeight === ar[i]) {
            numOfHeight++;
        } else if (maxHeight < ar[i]) {
            numOfHeight = 1;
            maxHeight = ar[i];
        }
    }

    console.log(numOfHeight);
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    //process.stdout.write("" + result + "\n");

}
