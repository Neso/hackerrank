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

function solve(n, s, d, m) {
    // Complete this function

    var counter = 0;
    var sum = 0;
    var total = 0;

    for (var i = 0; i < n; i++) {

        counter = 0;
        sum = 0;

        for (var j = i; counter <= m && j < n; j++) {
            counter++;
            sum += s[j];
            if (sum > d) {
                break;
            } else if (sum === d && counter === m) {
                total++;
                break;
            }
        }
    }

    return total;
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}
