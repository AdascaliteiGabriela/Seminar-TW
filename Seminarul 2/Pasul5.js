function addToArray(array, ...args) {
    for (var i = 0; i < args.length; i++) {
        array.push(args[i]);
    }

    return array
}

let array = ["a"]
console.log("Exemplul: ");
console.log(addToArray(array, "b", "c").join(", "))


function intercalare(array1,array2){
    const rez=[];
    if(array1.length!=array2.length)
    {
        console.log("Lungimile nu sunt egale");
        return undefined;
    }
    for(let i=0;i<array1.length;i++){
        rez.push(array1[i])
        rez.push(array2[i]);
    }
    return rez;

}

console.log("Rezolvare exercitiu")
console.log(intercalare([1,2,3],["Ana","are","mere"]));