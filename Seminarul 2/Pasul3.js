console.log("\n Exemplul de la pasul 3:")
function checkDivisible(n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))
console.log("\nPasul 3 rezolvare: ")

function verificare(sir1,sir2)
{
    let numar=0;
    if(sir1.length!=sir2.length)
        return -1;
    for( let i=0;i<sir1.length;i++)
            if(sir1[i]!=sir2[i])
                numar++;
        return numar;
}
console.log(verificare('abc','bcd'))
console.log(verificare('abc','abd'))
