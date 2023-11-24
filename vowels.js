function countVowels(String) {
    const vowels = "aeiouAEIOU";
    let count = 0;


    for (let char of String) {
        if (vowels.includes(char)) {
            count++;
        }
    }


    return count;
}

// const testString = "My name is Mutoni Jacky";
// const vowelCount = countVowels(testString);
// console.log(`The word "${testString}" has ${vowelCount} vowels.`);
console.log(countVowels("My name is Mutoni Jacky"));