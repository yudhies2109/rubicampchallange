function getCurrentTime(){
    const callTime = new Date();

    const hours = callTime.getHours();
    const minutes = callTime.getMinutes();
    const seconds = callTime.getSeconds();

    console.log(`Waktu sekarang: ${hours}:${minutes}:${seconds} `);
}

getCurrentTime()

// let waktu = getCurrentTime();
// console.log("Waktu sekarang: " + waktu);