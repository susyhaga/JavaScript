
let back_to_front = 'ana'
const clean = (back_to_front) =>  back_to_front.toLowerCase().replace(/[^A-Za-z]/g, '');

const palindrome = (back_to_front ) => {
  const word = clean(back_to_front );
  for (let i =0; i < word.length/2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
return true;
}

console.log(palindrome(back_to_front));