/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:

/* 
👉 Write your kata here!
*/
export function toKebabCase(string) {
  const letters = string.split('');
  let index = 0;
  let letter = '';

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      index = [i];
      letter = letters[i].toLowerCase();
      letters.splice(index, 1, `-${letter}`);
    }
  }

  return letters.join('');
}
//👉 Write the function your CodeWarriors will start with below here:

