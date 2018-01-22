/*
* @Author: Nenad
* @Date:   2018-01-22 03:00:29
* @Last Modified by:   Nenad
* @Last Modified time: 2018-01-22 03:00:55
*/

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    // now we can read/parse input
    input = input.toLowerCase();
    var test = "abcdefghijklmnopqrstuvwxyz";

    //26 is hardcoded in order not to read length all the time.
    //I could have read it outside as well I know.
    for (var i = 0; i < 26; i++) {
        if (input.indexOf(test[i]) === -1) {
            console.log("not pangram");
            return;
        }
    }

    console.log("pangram");
});
