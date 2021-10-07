// pseudo code:
// ============
// set LONGEST to the 0th element in WORDS

// for each string, WORD, in WORDS
// 	if WORD has more characters than LONGEST
// 		set LONGEST to WORD

// return LONGEST

function longestInList (words) {
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest
}

console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),
 "Northern Ireland")
console.log(longestInList(["the", "quick", "brown", "fox"]), "quick")
console.log(longestInList(["hello", "hi", "greetings", "hey"]), "greetings")
console.log(longestInList(["abc", "abc", "abc", "abcde"]), "abcde")
console.log(longestInList(["m", "n", "o", "p"]), "m")
console.log(longestInList(["table", "bedrooms"]), "bedrooms")