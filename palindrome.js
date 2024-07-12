//reverse the string
//check with original string

function Palindrome(str) {
    const isPalindrome = str.split('').reverse().join("");
    console.log(str === isPalindrome);
}

Palindrome("Jamal");
Palindrome("hannah");
