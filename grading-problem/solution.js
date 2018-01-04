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

function solve(grades) {
    // Complete this function
    var result

    for (var gradeId = grades.length - 1; gradeId >= 0; gradeId--) {
        if (grades[gradeId] <= 40) {
            console.log(grades[gradeId]);
        } else if (grades[gradeId] % 5 >= 3) {
            //added plus one to round it up
            result = grades[gradeId] / 5 + 1;
            console.log(result * 5);
        }
    }
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));



}
