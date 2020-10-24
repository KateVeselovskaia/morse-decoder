const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res ='';
    let words = expr.split('**********');
    words.forEach(word => {
        let letter = [];
        for(let i = 0; i < word.length; i += 10) {
            letter.push(word.slice(i,i + 10));
        }
        letter.forEach(item => {
            let l = item.replace(/10/g, '.');
            l = l.replace(/11/g, '-');
            l = l.replace(/00/g, '');
            res += MORSE_TABLE[l];
        })
        res+=' ';
    });
    return res.trimEnd();
} 

module.exports = {
    decode
}