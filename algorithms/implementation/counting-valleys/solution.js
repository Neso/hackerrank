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

function countingValleys (n, s) {
    // Complete this function

    var height = 0;
    var numOfValleys = 0;
    var inValley = false;

    for (var i = 0; i < n; i++) {
        if (s[i] === "U") {
            height++;
        } else {
            height--;
        }

        if (height < 0 && !inValley) {
            inValley = true;
            numOfValleys++;
        } else if (height >= 0) {
            inValley = false;
        }
    }

    return numOfValleys;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = countingValleys(n, s);
    process.stdout.write("" + result + "\n");

}
