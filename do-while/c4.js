const prompt = require("prompt-sync")();
let dadu;
let mainLagi;
let totalSkor = 0;

function lempardadu(){
    return Math.floor((Math.random() * 6)+1);
}


do {
    console.log("Melempar dadu...")
    dadu = lempardadu();   
    console.log(`Hasil : ${dadu}`)

    totalSkor += dadu;

    if(dadu === 6){
        console.log("JACKPOT! Bonus lemparan!");
        let bonus = lempardadu();
        console.log(`Hasil lempar Bonus : ${bonus}`)
        totalSkor += bonus;
    } 

    console.log(`Hasil Total Skor : ${totalSkor}`)
    mainLagi = prompt("Main lagi? (y/n) :");

} while (mainLagi.toLowerCase() === "y");

console.log(`Game selesai! Total skor: ${totalSkor}`)
