const getTotalArea = (squareDimensions) => {
    return squareDimensions.map((side) => {
        return side * side
    }).reduce((prev, current) => {
        return prev + current
    }, 0)

}

const squareDimensions = [3, 5, 12, 3, 5, 3]

const result = getTotalArea(squareDimensions)
console.log("result: ", result)

const numere=[12,23,43,54,11,19];
const divizor=3;

const suma=(numere)=>{
    return numere.filter(num=>num%divizor===0)
    .reduce((sum,num)=>sum+num,0);

};

console.log(suma(numere));