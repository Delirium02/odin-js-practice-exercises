const palindromes = function (isPalindrome) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const modifiedString = isPalindrome
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedString = modifiedString.split('').reverse().join('');

    return modifiedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
