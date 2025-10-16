const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true
        }
        return false;
    })
    return result
}

console.log(filterWords(words, forbiddenWord, minLength))

const years = [ 1990,2010,1867,1999,1974,2020]
const current_year=2025
const filterYears=(years,current_year) => {
    let arr=[];
    for(let i=0;i<years.length;i++)
        arr[i]=current_year-years[i];
        let j=0;
    const result=arr.filter((year) => {
        if(year>18)
            return true;
        else return false;

    });
    return result;
    

};
console.log(filterYears(years,current_year))
