export {longestRepetition, stringToArray, countRepetitions, filterRepeatedLetters}

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
 * @returns {any[]}
 */
function longestRepetition (s: string): any[] {
    const arrayOfLetters: string[] = stringToArray(s);
    let repeatedLetter: any[] = ["", 0];
    const filteredLetters: string[] = filterRepeatedLetters(arrayOfLetters);
    filteredLetters.forEach(letter => {
        const repetitions: number = countRepetitions(arrayOfLetters, letter);
        if (repeatedLetter[1] < repetitions) {
            repeatedLetter = [letter, repetitions];
        }
    });
    return repeatedLetter;
}

/**
 * Esta función devuelve el número de veces que se repite un elemento(de cualquier tipo) dentro de un array;
 * @param {T} elemento 
 * @param {T[]} array 
 * @returns {number} repeticiones
 */
function countRepetitions <T> (array: T[], elemento: T): number {
    let repetitions: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        if (elemento === array[i]) {
            repetitions += 1;
        }
    }
    return repetitions;
}

/**
 * Devuelve un array con las letras que se repiten dentro del mismo;
 * @param {string[]} array 
 * @returns {string[]}
 */
function filterRepeatedLetters (array: string[]): string[] {
    let arrayOut: string[] = [];
    for(let i: number = 0; i < array.length; i++) {
        if(arrayOut.includes(array[i]) !== true && array.includes(array[i], array.indexOf(array[i]) + 1)) {
            arrayOut.push(array[i]);
        }
    }
    return arrayOut;
}