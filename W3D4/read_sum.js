let res = 0;
const rdLn = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = function() {
    rdLn.question("Enter A Number: ", function(answer) {
        if (answer == "stop") {
            rdLn.close();
        } else {
            res += parseInt(answer);
            console.log(`sum is ${res}`);
            input();
        }
    });
}
input();