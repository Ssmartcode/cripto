"use strict";
import xorCipher, { validKey } from "./js/xor.js";
import caesarCipher from "./js/caesar.js";
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
let selectedMethod = {
  name: "Method",
  id: 0,
};
console.log(validKey("10011000"));
//! FUNCTII METODE
const method1 = (text, key) => xorCipher(text, key);
const method2 = (text, key) => caesarCipher(text, key, action);

//! CLEAR BOXEX
const clear = () => {
  textToEncrypt.value = "";
  resultedEncryption.textContent = "";
};
//! CHANGE HEADER--SMALL TO REFLECT THE  ACTIVE ECNCRYPTION
const changeHeaderSmall = (text) => {
  const link = `https://en.wikipedia.org/wiki/${text}_cipher`;
  headerSmall.innerHTML = `<a href=${link}>Find more about ${text} encryption method</a>`;
};
// ! LISTENER FOR ENCRYPT/DECRYPT SPAN
encryptSpan.addEventListener("click", (e) => {
  clear();
  encryptSpan.classList.add("current");
  decryptSpan.classList.remove("current");
  action = "encrypt";
  cipherButton.textContent = "encrypt";
});
decryptSpan.addEventListener("click", (e) => {
  clear();
  encryptSpan.classList.remove("current");
  decryptSpan.classList.add("current");
  action = "decrypt";
  cipherButton.textContent = "decrypt";
});

//! EVENT LISTENER FOR DROPDOWN BUTTON
dropDown.addEventListener("click", (e) => {
  const targetedMethod = e.target.textContent;
  selectedMethod = {
    name: targetedMethod,
    id: Number(e.target.id),
  };
  changeHeaderSmall(selectedMethod.name);
  dropDownButton.textContent = selectedMethod.name;
});

//! CHECK WHEN BUTTON FOR ENCRYPTION/DECRYPTION WAS PRESSED
cipherButton.addEventListener("click", () => {
  const textContent = textToEncrypt.value;
  const key = inputKey.value;
  if (selectedMethod.id === 1) {
    resultedEncryption.textContent = method1(textContent, key);
  } else if (selectedMethod.id === 2) {
    resultedEncryption.textContent = method2(textContent, key);
  } else {
  }
});
