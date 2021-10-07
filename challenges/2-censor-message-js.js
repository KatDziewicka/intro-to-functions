// pseudo code:
// ============
// set RAW_WORDS to the list of strings created by separating the string message into sub-strings at every space (' ')

// set SCRUBBED_WORDS to an empty list

// for each string, WORD, in RAW_WORDS
// 	set LOWERCASE_WORD to lowercase(word)
//   if LOWERCASE_WORD is contained in the list BAN_LIST
//     insert the string '*****' at the end of SCRUBBED_WORDS
//   else
//     insert WORD at the end of SCRUBBED_WORDS

// set SCRUBBED_MESSAGE to the string created by joining together every string in SCRUBBED_WORDS with a space (' ') as a join character

// return SCRUBBED_MESSAGE

function censorMessage(message, banList) {
    let rawWords = message.split(" ");
    return rawWords
}

console.log(censorMessage("hello there", ["hi"]))

// console.log(censorMessage("don't mess with cats", ["mess"]), "don't ***** with cats")
// console.log(censorMessage("Are you sure that this is safe", ["are", "is"]),   
//                            "***** you sure that this ***** safe")
// console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), 
//                             "I CANNOT ***** *****")
// console.log(censorMessage("I miss you", ["I", "MISS", "YOU"]), "***** ***** *****")
// console.log(censorMessage("hello, my name is John", ["I", "MISS", "YOU"]),
//                              "hello, my name is John")
// console.log(censorMessage("yes", ["yes"]), "***")