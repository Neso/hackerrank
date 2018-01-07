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

function breakingRecords(score) {
    // Complete this function

    var lowRecord = score[0];
    var highRecord = score[0];
    var lowNum = 0;
    var highNum = 0;

    for (var i = 1; i < score.length; i++) {
        if (lowRecord > score[i]) {
            lowNum++;
            lowRecord = score[i];
        } else if (highRecord < score[i]) {
            highNum++;
            highRecord = score[i];
        }
    }

    console.log(highNum, lowNum);
}

function main() {
    var n = parseInt(readLine());
    score = readLine().split(' ');
    score = score.map(Number);
    var result = breakingRecords(score);
    //console.log(result.join(" "));



}
