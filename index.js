const str = `
asdf
fdas
asds
d fm
dfaa
aaaa
`;

function stringWithEqualChars (string, amount) {
  const stringsToCheck  = string.split('\n').filter(el => el.length > 2 && new Set(el).size !== el.length);
  const result = [];

  stringsToCheck.forEach(string => {
	if (isRepeatable(string,amount)) {
	  result.push(string)
	}
  });

  return result.join('\n');
}

function isRepeatable(string, times) {
  const hash = new Map();
  const stringChars = string.split('');
  stringChars.forEach(char => {
	const regex = new RegExp(`${char}`, 'g');
	const charsInString = (string.match(regex) || []).length;
	if (!hash.get(charsInString)) {
	  hash.set(charsInString, char)
	}
  });
  return hash.get(times) !== undefined;
}

console.log(stringWithEqualChars(str, 2));
