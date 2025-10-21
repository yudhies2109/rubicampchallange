let waktu = 10;
let tombolDitekan = false;

while (waktu > 0 && !tombolDitekan) {
    
    if (waktu == 7) {
        console.log(`Countdown: ${waktu}`)
        console.log(`Timer dihentikan oleh user pada detik ke-${waktu}`)
        tombolDitekan = true;
    } else {
        console.log(`Countdown: ${waktu}`)
    }

    waktu--;
}