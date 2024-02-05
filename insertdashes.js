function insertDash(num) {
    const numStr = num.toString();
    let result = numStr[0];
    
    for (let i = 1; i < numStr.length; i++) {
        if (parseInt(numStr[i - 1]) % 2 !== 0 && parseInt(numStr[i]) % 2 !== 0) {
            result += '-';
        }
        result += numStr[i];
    }
    
    return result;
}

// Example usage:
console.log(insertDash(454793)); // Output: "4547-9-3"
console.log(insertDash(123456)); // Output: "123456"
console.log(insertDash(13579)); // Output: "1-3-5-7-9"
