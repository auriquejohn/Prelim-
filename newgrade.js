const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a Grade:', (answer) => {
    
    var grade = parseInt (answer);
    even (grade);
    odd (grade);
  
rl.close();
});
function even(grade, increment){


if (grades < 75)
    console.log("Your new grade is"+increment);
}