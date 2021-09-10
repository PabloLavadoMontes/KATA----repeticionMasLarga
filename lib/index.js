"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterRepeatedLetters = exports.countRepetitions = exports.stringToArray = exports.longestRepetition = void 0;
/**
 * Transforma un string en varias letras dentro de un array que devuelve;
 * @param {string} palabras
 * @returns {string[]} arrayDeLetras
 */
function stringToArray(word) {
    let array = [];
    array = word.split("");
    return array;
}
exports.stringToArray = stringToArray;
/**
 * Devuelve el caracter que más se repite y el número de veces correspondientes;
 * @param {string} s
 * @returns {any[]}
 */
function longestRepetition(s) {
    const arrayOfLetters = stringToArray(s);
    let repeatedLetter = ["", 0];
    const filteredLetters = filterRepeatedLetters(arrayOfLetters);
    filteredLetters.forEach(letter => {
        const repetitions = countRepetitions(arrayOfLetters, letter);
        if (repeatedLetter[1] < repetitions) {
            repeatedLetter = [letter, repetitions];
        }
    });
    return repeatedLetter;
}
exports.longestRepetition = longestRepetition;
/**
 * Esta función devuelve el número de veces que se repite un elemento(de cualquier tipo) dentro de un array;
 * @param {T} elemento
 * @param {T[]} array
 * @returns {number} repeticiones
 */
function countRepetitions(array, elemento) {
    let repetitions = 0;
    for (let i = 0; i < array.length; i++) {
        if (elemento === array[i]) {
            repetitions += 1;
        }
    }
    return repetitions;
}
exports.countRepetitions = countRepetitions;
filterRepeatedLetters(["b", "a", "c", "d", "3", "b"]);
/**
 * Devuelve un array con las letras que se repiten dentro del mismo;
 * @param {string[]} array
 * @returns {string[]}
 */
function filterRepeatedLetters(array) {
    let arrayOut = [];
    for (let i = 0; i < array.length; i++) {
        if (arrayOut.includes(array[i]) !== true && array.includes(array[i], array.indexOf(array[i]) + 1)) {
            arrayOut.push(array[i]);
        }
    }
    return arrayOut;
}
exports.filterRepeatedLetters = filterRepeatedLetters;
//# sourceMappingURL=index.js.map