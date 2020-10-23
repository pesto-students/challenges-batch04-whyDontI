// import { isString } from "util";

function capitalizeFirstLetter(word) {
  return `${(word[0]).toUpperCase()}${word.slice(1)}`;
}

function abbreviateString(str) {
  if (typeof str !== 'string') throw Error();

  const words = str.split(' ');
  return `${capitalizeFirstLetter(words[0])} ${(words[words.length - 1][0]).toUpperCase()}.`;
}

export { abbreviateString };
