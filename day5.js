const isPalindrome = (str) => {
 let newStr = str.split("").reverse().join("");
 console.log(str === newStr);

}

isPalindrome("racecar")
isPalindrome("Hey Jeff Less Gerrit!")
isPalindrome("hannah")
