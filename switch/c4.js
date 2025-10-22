let bulan = 11;
// Tulis kode switch statement di sini

function dayinMonth(bulan) {
    let hitungHari = new Date(2026, bulan, 0).getDate();

    return hitungHari;
    // console.log(`Jumlah Hari pada bulan ${bulan} : ${hitungHari} hari`);
}

let jmlhHari = dayinMonth(bulan);

// console.log(dayinMonth(11))
// dayinMonth(bulan);

switch (bulan) {

    case 1:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 2:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 3:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 4:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 5:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 6:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 7:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 8:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 9:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 10:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 11:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    case 12:
        console.log(`Bulan ke- ${bulan} (Januari) memiliki ${jmlhHari} hari`)
        break;

    default:
        break;
}