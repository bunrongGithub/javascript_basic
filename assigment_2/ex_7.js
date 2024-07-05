const countVowels = (string) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("helloooo"));
