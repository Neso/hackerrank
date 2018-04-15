/*
* @Author: Nenad
* @Date:   2018-04-16 00:48:29
* @Last Modified by:   Nenad
* @Last Modified time: 2018-04-16 00:48:41
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

function acmTeam(topics, size) {
    // Complete this function

    var teams = 0;
    var numTopics = 0;
    var tmpTopics = 0;

    for (var i = 0; i < topics.length; i++) {
        for (var j = i + 1; j < topics.length; j++) {
            for (var step = 0; step < size; step++) {
                if (topics[i][step] === "1" || topics[j][step] === "1") {
                    tmpTopics++;
                }
            }
            //console.log(tmpTopics);
            if (tmpTopics >= numTopics) {
                if (tmpTopics > numTopics) {
                    //console.log(tmpTopics, numTopics, teams);
                    numTopics = tmpTopics;
                    teams = 0;
                }
                teams++;
            }
            tmpTopics = 0;
        }
    }

    console.log(numTopics);
    console.log(teams);

    return;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var topic = [];
    for(var topic_i = 0; topic_i < n; topic_i++){
       topic[topic_i] = readLine();
    }
    //console.log(topic);
    acmTeam(topic, m);
    //console.log(result.join("\n"));



}
