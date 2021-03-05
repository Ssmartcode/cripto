const invalidKeyMessage =
  "Key is not valid. Key should be a number bigger than 0";
//
const ceaserCipher = (text, key, action) =>
  action === "encrypt" ? encrypt(text, key) : decrypt(text, key);

// CHECK IF KEY IS VALID
const validKey = (key) => {
  return isFinite(+key) && +key > 0;
};
// ENCRYPT FUNCTION
function encrypt(text, key) {
  if (!validKey(key)) return invalidKeyMessage;
  let encryptedText = "";
  let asciiChar = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i].charCodeAt();
    console.log(text, char);
    if (char >= "a".charCodeAt() && char <= "z".charCodeAt()) {
      asciiChar = char + key;
      if (asciiChar > "z".charCodeAt()) {
        asciiChar -= 26;
      }
    } else if (char >= "A".charCodeAt() && char <= "Z".charCodeAt()) {
      asciiChar = char + key;
      if (asciiChar > "Z".charCodeAt()) {
        asciiChar -= 26;
      }
    } else {
      asciiChar = char;
    }
    console.log(key);
    encryptedText += String.fromCharCode(asciiChar);
  }
  return encryptedText;
}

// DECRYPT FUNCTION
function decrypt(text, key) {
  if (!validKey(key)) return invalidKeyMessage;
  let decryptedText = "";
  let asciiChar = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i].charCodeAt();
    if (char >= "a".charCodeAt() && char <= "z".charCodeAt()) {
      asciiChar = char - key;
      if (asciiChar < "a".charCodeAt()) {
        asciiChar += 26;
      }
    } else if (char >= "A".charCodeAt() && char <= "Z".charCodeAt()) {
      asciiChar = char - key;
      if (asciiChar < "A".charCodeAt()) {
        asciiChar += 26;
      }
    } else {
      asciiChar = char;
    }
    decryptedText += String.fromCharCode(asciiChar);
  }
  console.log(key);
  return decryptedText;
}
export default ceaserCipher;
