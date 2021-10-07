// if NUM_ONE is equal to NUM_TWO
// 	return True
// else
// 	return False

function isEqual (numOne, numTwo) {
    if (numOne==numTwo) {
        return true;
    } else {
        return false;
    }
}


console.log(isEqual(4, 4), true)
console.log(isEqual(0, 0), true)
console.log(isEqual(-4, -4), true)
console.log(isEqual(4, -4), false)
console.log(isEqual(0, 1), false)
console.log(isEqual(100, 100), true)
console.log(isEqual(10, 100), false)
console.log(isEqual(11, 1), false)