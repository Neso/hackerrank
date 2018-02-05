/*
* @Author: Nenad
* @Date:   2018-02-05 23:24:08
* @Last Modified by:   Nenad
* @Last Modified time: 2018-02-05 23:25:10
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

function solve(year){
    // Complete this function

    //I am certain there is much more elegant solution.
    //But this was written in less then 5 minutes, because programer days are expensive ;)
    if (year > 1918) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            return "12.09." + year;
        } else {
            return "13.09." + year;
        }
    } else if (year < 1918) {
        if (year % 4 === 0) {
            return "12.09." + year;
        } else {
            return "13.09." + year;
        }
    } else {
        return "26.09.1918";
    }
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}
