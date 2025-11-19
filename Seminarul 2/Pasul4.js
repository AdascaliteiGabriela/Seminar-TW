function arrayNumere(array)
{
    const numere=[];
    for(let i=0;i<array.length;i++)
        numere.push(array[i]);
    return numere;
}

const vect1 =[1,2,3];
const vect2=arrayNumere(vect1);
for(let i=0;i<vect2.length;i++)
        console.log(vect2[i]);
