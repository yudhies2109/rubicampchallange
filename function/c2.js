function getCurrentTime(){
    const callTime = new Date();

    const hours = callTime.getHours();
    const minutes = callTime.getMinutes();
    const seconds = callTime.getSeconds();

    let waktu = `${hours}:${minutes}:${seconds}`;

    return waktu;
}

let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);