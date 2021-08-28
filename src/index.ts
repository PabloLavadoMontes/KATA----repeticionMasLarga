export {longestRepetition, stringToArray, getBiggestNumber}

/**
 * Transforma un string en varias letras dentro de un array que devuelve;
 * @param {string} palabras 
 * @returns {string[]} arrayDeLetras
 */
function stringToArray(word: string):string[] {
    let array: any = [];
    array = word.split("");
    return array;
}

/**
 * Devuelve el caracter que más se repite y el número de veces correspondientes;
 * @param {string} s 
 */
function longestRepetition (s: string): string[] {
    const arrayOfLetters: string[] = stringToArray(s);
    const arrayOut: any[] = [];
    let arrayOfRepetitions: any[] = [];
    let repeatedLetter: string = "";
    let repetitions: number = 1; 
    for (let i: number = 0; i < arrayOfLetters.length; i++) {
        if (repeatedLetter !== arrayOfLetters[i]) {
            repetitions = 1;
            repeatedLetter = arrayOfLetters[i];
        } else {
            arrayOfRepetitions.push(repeatedLetter, repetitions);
            repetitions = repetitions+1;
        }
        if(arrayOfRepetitions[arrayOfRepetitions.length - 2] === arrayOfLetters[i]) {
            arrayOfRepetitions.push(repeatedLetter, repetitions);
        }
    }
    if (s.length === 0) {
        arrayOut.push("", 0);
    } else if (repetitions === 1) {
        arrayOut.push(arrayOfLetters[0], 1);
    } else {
        repetitions = getBiggestNumber(arrayOfRepetitions);
        repeatedLetter = arrayOfRepetitions[arrayOfRepetitions.indexOf(repetitions) - 1];
        arrayOut.push(repeatedLetter, repetitions);
    }
    return arrayOut;
}

/**
 * Devuelve el número mayor de un array formado por strings y numbers;
 * @param {any[]} array 
 * @returns {number} biggestNumber
 */
function getBiggestNumber (array: any[]): number {
    let biggestNumber: number = array[1]; 
    for (let i: number = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            if (biggestNumber < array[i]) {
                biggestNumber = array[i];
            }
        }
    }
    return biggestNumber;
}