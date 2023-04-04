function primeNumbers(n) {
    a = 1;
    const primes = [];
    while (primes.length < n) {
        let count = 0;
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) {
                count += 1;
            } 
        }
        if (count === 2) {
            primes.push(a);
        }
        a ++;       
    }
    return primes
}

console.time('primeNumbers')
console.log(primeNumbers(process.argv[2]))
console.timeEnd('primeNumbers')