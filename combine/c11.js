function checkPrimes(arr) {

    // Fungsi untuk mengecek satu angka apakah prima
    function isPrime(num) {

        // 1. Angka <= 1 bukan bilangan prima
        if (num <= 1) return false;

        // 2. Angka 2 adalah satu-satunya bilangan prima genap
        if (num === 2) return true;

        // 3. Angka genap selain 2 pasti bukan prima
        if (num % 2 === 0) return false;

        // 4. Cek pembagi ganjil dari 3 sampai akar dari num
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false; // Ketemu pembagi → bukan prima
            }
        }

        // 5. Jika tidak ketemu pembagi sama sekali → prima
        return true;
    }

    // 6. Cek setiap elemen array, hasilnya array boolean
    return arr.map(num => isPrime(num));
}

// Contoh penggunaan
console.log(checkPrimes([2, 4, 7, 9, 11]));