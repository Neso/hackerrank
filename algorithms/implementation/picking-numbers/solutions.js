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

function pickingNumbers (a) {
    // Complete this function

    a.sort(function (a, b) {
        return a - b;
    });

    var objCount = {};
    var keys = [];

    for (var i = 0; i < a.length; i++) {
        if (!objCount[a[i]]) {
            objCount[a[i]] = 1;
            keys.push(a[i]);
        } else {
            objCount[a[i]]++;
        }
    }

    if (keys.length === 1) {
        return objCount[keys[0]];
    }

    var maxCount = objCount[keys[0]] + objCount[keys[1]];
    var maxSingle = objCount[keys[0]] > objCount[keys[1]] ? objCount[keys[0]] : objCount[keys[1]];

    for (var i = 2; i < keys.length; i++) {
        if (objCount[keys[i]] > maxSingle) {
            maxSingle = objCount[keys[i]];
        }

        if (Math.abs(keys[i] - keys[i - 1]) !== 1) {
            continue;
        }

        if (objCount[keys[i]] + objCount[keys[i - 1]] > maxCount) {
            maxCount = objCount[keys[i]] + objCount[keys[i - 1]];
        }
    }

    return maxCount > maxSingle ? maxCount : maxSingle;
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = pickingNumbers(a);
    process.stdout.write("" + result + "\n");

}
