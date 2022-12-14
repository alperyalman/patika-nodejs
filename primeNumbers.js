const arguments = process.argv.slice(2)

function showPrimeNumbers(lowNumber, highNumber) {
    for(let i = lowNumber; i<=highNumber; i++) {
        let isPrime = true;
        for(let j = 2; j<=i; j++) {
            if(i % j === 0 &&  j!==i) {
                isPrime = false;
            }
        }
        if(isPrime) {
            console.log(i);
        }
    }
}

showPrimeNumbers(parseInt(arguments[0]),parseInt(arguments[1]));

console.log(process.argv[1]);

module.exports = showPrimeNumbers; // Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.