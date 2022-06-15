let rolls = [];
let roll = () => {

    let dice = Math.floor(Math.random() * 6 + 1);
    return dice;
}
let startRolls = () => {
    console.log("Rolls begin")
    let howmuch = parseInt(document.getElementById("input").value);
    if (howmuch > 20)
        howmuch = 20;
    for (let i = 0; i < howmuch; i++) {
        let num = roll();
        rolls.push(num);
    }
    displayR();
}
    let displayedRolls = [];
    let rollsDisplay = document.getElementById("rolls");
    let averageDisplay = document.getElementById("average");
    let totalDisplay = document.getElementById("total");
    let displayTotal = 0;
    let displayAverage = 0;
let displayR = () => {
    console.log("Displayrolls")
    console.log(`Rolls: ${rolls.length}`)
    console.log(rolls[0]);
    for (let i = 0; i < rolls.length; i++) {
        setTimeout(() => {
            rollsDisplay.innerHTML += rolls[i] + " ";
            displayedRolls.push(rolls[i]);
            console.log(displayedRolls[i]);
            displayTotal += parseInt(rolls[i]);
            for (let i = 0; i < displayedRolls.length; i++){
                displayAverage = displayTotal / displayedRolls.length;
                averageDisplay.innerHTML = `Average: ${displayAverage}`;
                totalDisplay.innerHTML = `Total: ${displayTotal}`;
            }
        }, 1000 * i);
    }
}
let reset = () => {
    rolls = [];
    displayedRolls = [];
    rollsDisplay.innerHTML = "";
    averageDisplay.innerHTML = "Average:";
    totalDisplay.innerHTML = "Total:";
    displayTotal = 0;
    displayAverage = 0;
}