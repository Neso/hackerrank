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

function solve (n, p) {
    // Complete this function

    var front = Math.floor(p / 2);
    var back = Math.floor((n - p) / 2);

    if (n % 2 === 0 && n - p === 1) {
        back++;
    }

    //console.log(front);
    //console.log(back);

    return front > back ? back : front;
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write(""+result+"\n");

}
