"use strict";
import xorCipher from "./javaFiles/xor.js";
import caesarCipher from "./javaFiles/caesar.js";

const encryptSpan = document.querySelector(".encrypt-span");
const decryptSpan = document.querySelector(".decrypt-span");
const dropDown = document.querySelector(".dropdown");
const dropDownButton = document.querySelector(".dropdown-btn");
const cipherButton = document.querySelector(".cipher");
const inputKey = document.querySelector(".input--key");
let textToEncrypt = document.querySelector(".input--encrypt");
let resultedEncryption = document.querySelector(".encrypted-text");
let headerSmall = document.querySelector("small");

let action = "encrypt";
let key = inputKey.value;
let selectedMethod = {
  name: "Method",
  id: 0,
};

// FUNCTII METODE
const method1 = (text) => xorCipher(text, key);
const method2 = (text) => caesarCipher(text, key, action);

//CLEAR BOXEX
const clear = () => {
  textToEncrypt.value = "";
  resultedEncryption.textContent = "";
};
// CHANGE HEADER--SMALL TO REFLECT THE  ACTIVE ECNCRYPTION
const changeHeaderSmall = (text) =>
  (headerSmall.textContent = `Find more about ${text} method`);
// LISTENER FOR ENCRYPT/DECRYPT SPAN
encryptSpan.addEventListener("click", (e) => {
  clear();
  encryptSpan.classList.add("current");
  decryptSpan.classList.remove("current");
  action = "encrypt";
  cipherButton.innerHTML = "encrypt";
});
decryptSpan.addEventListener("click", (e) => {
  clear();
  encryptSpan.classList.remove("current");
  decryptSpan.classList.add("current");
  action = "decrypt";
  cipherButton.innerHTML = "decrypt";
});

// EVENT LISTENER FOR DROPDOWN BUTTON
dropDown.addEventListener("click", (e) => {
  const targetedMethod = e.target.textContent;
  selectedMethod = {
    ...selectedMethod,
    name: targetedMethod,
    id: Number(e.target.id),
  };
  changeHeaderSmall(selectedMethod.name);
  dropDownButton.textContent = selectedMethod.name;
});

// CHECK WHEN BUTTON FOR ENCRYPTION/DECRYPTION WAS PRESSED
cipherButton.addEventListener("click", () => {
  const textContent = textToEncrypt.value;
  key = inputKey.value;
  if (selectedMethod.id === 1) {
    resultedEncryption.innerHTML = method1(textContent);
  } else if (selectedMethod.id === 2) {
    resultedEncryption.innerHTML = method2(textContent);
  } else {
  }
});
