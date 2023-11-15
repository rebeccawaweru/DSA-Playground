//only reversing the letters in a string, special characters/numbers should not be reverse
function reverseLettersInWords(str) {
    // Use regular expression to identify words
    const words = str.split(/\b/);
  
    // Reverse only the letters in each word
    const reversedWords = words.map(word => {
      // If the word consists of letters, reverse them
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.split('').reverse().join('');
      }
      // If the word consists of non-letters, leave it unchanged
      return word;
    });
  
    // Join the reversed words back into a string
    const result = reversedWords.join('');
    return result;
  }
  // Example usage:
  const inputString = "ab-c!d";
  const result = reverseLettersInWords(inputString);
  console.log(result); // Outputs "dc-b!a"
  
//cheking if number is an integer
function isInteger(num){
    num % 1 === 0;
}
// Example usage:
console.log(isInteger(4)) //true
console.log(isInteger(4.2)) //false

//how to empty an array

