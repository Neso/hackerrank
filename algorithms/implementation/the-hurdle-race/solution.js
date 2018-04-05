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

function hurdleRace (k, heights) {
    // Complete this function

    var maxJump = 0;

    for (var i = 0; i < heights.length; i++) {
        if (heights[i] > maxJump) {
            maxJump = heights[i];
        }
    }

    var doses = maxJump - k;

    return doses > 0 ? doses : 0;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    height = readLine().split(' ');
    height = height.map(Number);
    var result = hurdleRace(k, height);
    process.stdout.write("" + result + "\n");

}
