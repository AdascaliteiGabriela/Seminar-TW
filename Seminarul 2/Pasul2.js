
//let sayHello = (name) => {
   // return `Hello, ${name}!`
//}

//console.log(sayHello(process.argv[0]))
//console.log(sayHello(process.argv[1]))
//console.log(sayHello(process.argv[2]))

const concatenateString = (arr)=>{
    let result = ''
    for (let i=0;i<arr.length;i++)
    {
        result +=arr[i]
    }
    return result
}
console.log("\nPasul 2: ")
console.log(concatenateString(['a','b','c']))

