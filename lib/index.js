"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBiggestNumber = exports.stringToArray = exports.longestRepetition = void 0;
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
 */
function longestRepetition(s) {
    const arrayOfLetters = stringToArray(s);
    const arrayOut = [];
    let arrayOfRepetitions = [];
    let repeatedLetter = "";
    let repetitions = 1;
    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (repeatedLetter !== arrayOfLetters[i]) {
            repetitions = 1;
            repeatedLetter = arrayOfLetters[i];
        }
        else {
            arrayOfRepetitions.push(repeatedLetter, repetitions);
            repetitions = repetitions + 1;
        }
        if (arrayOfRepetitions[arrayOfRepetitions.length - 2] === arrayOfLetters[i]) {
            arrayOfRepetitions.push(repeatedLetter, repetitions);
        }
    }
    if (s.length === 0) {
        arrayOut.push("", 0);
    }
    else if (repetitions === 1) {
        arrayOut.push(arrayOfLetters[0], 1);
    }
    else {
        repetitions = getBiggestNumber(arrayOfRepetitions);
        repeatedLetter = arrayOfRepetitions[arrayOfRepetitions.indexOf(repetitions) - 1];
        arrayOut.push(repeatedLetter, repetitions);
    }
    return arrayOut;
}
exports.longestRepetition = longestRepetition;
/**
 * Devuelve el número mayor de un array formado por strings y numbers;
 * @param {any[]} array
 * @returns {number} biggestNumber
 */
function getBiggestNumber(array) {
    let biggestNumber = array[1];
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            if (biggestNumber < array[i]) {
                biggestNumber = array[i];
            }
        }
    }
    return biggestNumber;
}
exports.getBiggestNumber = getBiggestNumber;
//# sourceMappingURL=index.js.map