const { text } = require("stream/consumers")

const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (text) => {
    const words = text.split(' ')
    const result = {}
    for (let word of words) {
        if (word in result) {
            result[word]++
        } else {
            result[word] = 1
        }

    }
    for (let word in result) {
        result[word] /= words.length
    }
    return result
}



console.log(getCounts(sampleString))


//implementează o funcție care calculează frecvențele 
// relative de apariție a unor litere într-un text, excluzând caracterul pentru spațiu

const textFaraSpatii=sampleString.replace(/\s/g, '');
console.log(textFaraSpatii);
const getNumarLitere = (text)=>{
    const litere=[];
    for(let i=0;i<text.length;i++)
        litere.push(text[i])

    const rezultat={};
    for(let litera of litere)
    {
        if(litera in rezultat)
            rezultat[litera]++;
        else
            rezultat[litera]=1;
    }
    return rezultat;
}
console.log(getNumarLitere(textFaraSpatii));
