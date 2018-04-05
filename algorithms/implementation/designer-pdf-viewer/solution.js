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

function designerPdfViewer (h, word) {
    // Complete this function

    var tallestLetter = 0;

    for (var i = 0; i < word.length; i++) {
        if (h[word[i].charCodeAt() - 97] > tallestLetter) {
            tallestLetter = h[word[i].charCodeAt() - 97];
        }
    }

    return tallestLetter * word.length;
}

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var result = designerPdfViewer(h, word);
    process.stdout.write("" + result + "\n");

}
