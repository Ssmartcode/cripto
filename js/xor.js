const invalidKeyMessage = `Encrytption failed!
Key is not valid! Your key should consist of 8 digits (only 1 and 0)`;

// CARACTER LA BINAR
const textToBinaryConversion = (char) => {
  let asciiCode = char.charCodeAt();
  let binaryCode = "";
  while (asciiCode >= 1) {
    binaryCode =
      asciiCode % 2 === 1
        ? (binaryCode = "1" + binaryCode)
        : (binaryCode = "0" + binaryCode);
    asciiCode = Math.floor(asciiCode / 2);
  }
  const missingDigits = 8 - binaryCode.length;
  for (let i = 0; i < missingDigits; i++) {
    binaryCode = "0" + binaryCode;
  }
  return binaryCode;
};

// BINAR LA TEXT
const binaryToTextConversion = (binaryChar) => {
  let decimalChar = 0;
  const length = binaryChar.length - 1;
  for (let i = 0; i <= length; i++) {
    decimalChar += Number(binaryChar[i]) * 2 ** (length - i);
  }
  return String.fromCharCode(decimalChar);
};
// CHECK IF KEY IS VALID
const validKey = (key) => {
  const binaryType = /^[01]+$/.test(key);
  return key.length === 8 && binaryType;
};
// COMPAR CARACTERUL SI KEY
function xorCompare(char, key) {
  const binaryChar = textToBinaryConversion(char);
  let encryptedBinaryChar = "";
  for (let i = 0; i < binaryChar.length; i++) {
    binaryChar[i] === key[i]
      ? (encryptedBinaryChar += "0")
      : (encryptedBinaryChar += "1");
  }
  const encryptedChar = binaryToTextConversion(encryptedBinaryChar);
  return encryptedChar;

  // AICI ARE LOC CRIPTAREA/DECRIPTAREA
}
function xorCipher(text, key) {
  let encryptedText = "";
  if (!validKey(key)) return invalidKeyMessage;
  for (let i = 0; i < text.length; i++) {
    encryptedText += xorCompare(text[i], key);
  }
  return encryptedText;
}
export default xorCipher;
