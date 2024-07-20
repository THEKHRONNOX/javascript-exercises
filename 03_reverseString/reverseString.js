const reverseString = function( word ) {
    if (word == '') return '';
    const split = word.split(' ');

    const reversed = split.map((str) => {
        return str.split('').reverse().join('');
    })

    
    return reversed.reverse().join(' ');
};

console.log(reverseString('hello'));
console.log(reverseString('hello there'));
console.log(reverseString('123! abc!'));
console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;
