"use strict";

const dropDown = document.querySelector(".dropdown");
const dropDownButton = document.querySelector(".dropdown-btn");
const encryptButton = document.querySelector(".encrypt");
const textToEncrypt = document.querySelector(".text-encrypt");
const resultedEncryption = document.getElementById("encryption-result");

const key = "10010011";
let selectedMethod = {
  name: "Metoda",
  id: 0,
};
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

const binaryToTextConversion = (binaryChar) => {
  let decimalChar = 0;
  const length = binaryChar.length - 1;
  for (let i = 0; i <= length; i++) {
    decimalChar += Number(binaryChar[i]) * 2 ** (length - i);
  }
  return String.fromCharCode(decimalChar);
};
const method1 = (text) => text + "-metoda 1";
const method2 = (text) => text + "-metoda 2";
const method3 = (text) => text + "-metoda 3";
dropDown.addEventListener("click", (e) => {
  if (e.target.textContent) {
    selectedMethod = {
      ...selectedMethod,
      name: e.target.textContent,
      id: Number(e.target.id),
    };
  }
  console.log(selectedMethod);
  dropDownButton.textContent = selectedMethod.name;
});

encryptButton.addEventListener("click", () => {
  const textContent = textToEncrypt.value;

  if (selectedMethod.id === 1) {
    resultedEncryption.innerHTML = method1(textContent);
  } else if (selectedMethod.id === 2) {
    resultedEncryption.innerHTML = method2(textContent);
  } else if (selectedMethod.id === 3) {
    resultedEncryption.innerHTML = method3(textContent);
  } else {
    console.log(selectedMethod.id);
  }
});

function xorEncryption(text, key) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    encryptedText += xorCompare(text[i], key);
  }
  return encryptedText;
}
function xorCompare(char, key) {
  const binaryChar = textToBinaryConversion(char);
  let encryptedBinaryChar = "";
  for (let i = 0; i < binaryChar.length; i++) {
    binaryChar[i] === key[i]
      ? (encryptedBinaryChar = "0" + encryptedBinaryChar)
      : (encryptedBinaryChar = "1" + encryptedBinaryChar);
    console.log(encryptedBinaryChar);
  }
  const encryptedChar = binaryToTextConversion(encryptedBinaryChar);
  return encryptedChar;
  
}

console.log(xorCompare("1", key));
