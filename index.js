const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processGrades(marks) {
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    return grade; 
}

prompt.question("Enter student marks (0-100): ", (input) => {
    let marks = Number(input); 
    if (marks >= 0 && marks <= 100) {
        let grade = processGrades(marks); 
        console.log(`Student grade is ${grade}`);
    } else {
        console.log("Please input correct marks value between 0 and 100");
    }
    prompt.close();
});