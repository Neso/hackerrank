/*
* @Author: Nenad
* @Date:   2018-02-05 22:26:26
* @Last Modified by:   Nenad
* @Last Modified time: 2018-02-05 22:26:51
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

function acidNaming(acid_name) {
    // Complete this function

    if (acid_name[acid_name.length - 1] === "c" && acid_name[acid_name.length - 2] === "i") {
        if (acid_name.indexOf("hydro") === 0) {
            return "non-metal acid";
        } else {
            return "polyatomic acid";
        }
    }

    return "not an acid";
}

function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var acid_name = readLine();
        var result = acidNaming(acid_name);
        process.stdout.write("" + result + "\n");
    }

}
