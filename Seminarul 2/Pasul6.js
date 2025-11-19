const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false
        }
    }
    return true
}

if (process.argv.length <= 2) {
    console.log('not enough parameters')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}

const fibonacci =(n) =>{
    if(n<2) 
        return n;
    let a = 0; 
    let b = 1; 
    let aux;
    for(let i=2;i<=n;i++)
    {
        aux=a+b;
        a=b;
        b=aux;

    }
    return b;
}
if(process.argv.length<2)
    console.log("Nu ai introdus parametrul");
else
    console.log(fibonacci(parseInt(process.argv[2])));