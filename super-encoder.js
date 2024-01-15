
const encryptors = require('./encryptors.js');

const encodeMessage = (str, num) => {

  return encryptors.symbolCipher(encryptors.caesarCipher(encryptors.reverseCipher(str)), num);
  
}

const decodeMessage = (str, num) => {
 
  return encryptors.reverseCipher(encryptors.caesarCipher(encryptors.symbolCipher(str)), num);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
