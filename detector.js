const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function speedMonitor(speed) {
const maxSpeed=70;
if(speed<=70){
  return "OK";
}else {
    const excessSpeed=(speed-maxSpeed);
    const points=Math.floor(excessSpeed / 5);
    if (points>=12) {
        return('License Suspended!');
    } else if(points<12){
        console.log(`Your points are: ${points}`)
    }
}

}
prompt.question("speed of the car: ", (input) => {
    const speed = Number(input); 
        let points = speedMonitor(speed); 
        console.log(` Points: ${points}`);
    
    prompt.close();
});