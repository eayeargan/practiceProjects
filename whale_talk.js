const input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++){
    //console.log(j);
    if (input[i] === vowels[j]){
      console.log(input[i])
      resultArray.push(vowels[j]);
    }
  }
  //console.log(i);
}

const resultString = resultArray.join().toUpperCase();

console.log(resultString);

console.log(resultArray);
