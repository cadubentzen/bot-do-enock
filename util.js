function isVow(letter) {
  switch (letter.toLowerCase()) {
    case 'a': case 'á': case 'ã': case 'â':
    case 'e': case 'é': case 'ê':
    case 'i': case 'í':
    case 'o': case 'ó': case 'õ': case 'ô':
    case 'u': case 'ú':
      return true;
    default:
      return false;
  }
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function convertMtoB(text) {
  let modified = text;
  for (let i = 0; i < text.length - 1; i += 1) {
    if (text.charAt(i).toLowerCase() === 'm' && isVow(text.charAt(i + 1))) {
      if (text.charAt(i) === text.charAt(i).toLowerCase()) {
        modified = setCharAt(modified, i, 'b');
      } else {
        modified = setCharAt(modified, i, 'B');
      }
    }
  }
  return modified;
}

module.exports = {
  convertMtoB,
};
