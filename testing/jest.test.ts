/* Busque el carácter con la repetición consecutiva más larga y regrese:
[Letra, Cantidad] */

/* Ejemplos:
longestRepetition("") => ["", 0];
longestRepetition("aesdaasaaa") => ["a", 3];
nuevoArray: string[] = [];
"aesdaasaaa" = ["a", "e", "s", "d", "a", "a", "a", "s", "a", "a"];
let letrarepetida = array[i]
if (letraRepetida !== array[i])
array[i] = letraRepetida
else 
letraRepetida ++
nuevoArray.push(letraRepetida + ++)
longestRepetition("sdgvaasdvfdeerrrfsssssdzz") => ["s", 5]; */

import {longestRepetition, stringToArray, countRepetitions, filterRepeatedLetters} from "../src/index"

// longestRepetition:
test("Devuelve el caracter que más se repite y su cantidad", ()=> {
    expect(longestRepetition("aesdaasaaa")).toStrictEqual(["a", 3]);
});
test("Devuelve el caracter que más se repite y su cantidad", ()=> {
    expect(longestRepetition("sdgvaasdvfdeerrrfsssssdzz")).toStrictEqual(["s", 5]);
});
test("Devuelve el caracter que más se repite y su cantidad", ()=> {
    expect(longestRepetition("")).toStrictEqual(["", 0]);
});
test("Devuelve el caracter que más se repite y su cantidad", ()=> {
    expect(longestRepetition("zzzzza")).toStrictEqual(["z", 5]);
});
test("Devuelve el caracter que más se repite y su cantidad", ()=> {
    expect(longestRepetition("rrraaasssdaeee")).toStrictEqual(["r", 3]);
});


// stringToArray:
test("Transforma un string en varias letras dentro de un array que devuelve", ()=> {
    expect(stringToArray("perro")).toStrictEqual(["p", "e", "r", "r", "o"]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", ()=> {
    expect(stringToArray("nataliporrr")).toStrictEqual(["n", "a", "t", "a", "l", "i", "p", "o", "r", "r", "r"]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", ()=> {
    expect(stringToArray("zzzzza")).toStrictEqual(["z", "z", "z", "z", "z", "a"]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", ()=> {
    expect(stringToArray("")).toStrictEqual([]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", ()=> {
    expect(stringToArray("asasa")).toStrictEqual(["a", "s", "a", "s", "a"]);
});


// countRepetitions:
test("Devuelve el número de veces que se repite un elemento dentro de un array", ()=> {
    expect(countRepetitions(["z", 1, "z", 2, "j", 3, "r", 2, "y", 6, "b", 3], "z")).toBe(2);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", ()=> {
    expect(countRepetitions([], "s")).toBe(0);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", ()=> {
    expect(countRepetitions(["x", 2, "z", 2, "j", 3, "r", 2, "y", 6, "b", 3], 2)).toBe(3);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", ()=> {
    expect(countRepetitions(["p", "a", 0, "h"], "h")).toBe(1);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", ()=> {
    expect(countRepetitions([], "")).toBe(0);
});


// filterRepeatedLetters:
test("Devuelve un array con las letras que se repiten dentro del mismo", ()=> {
    expect(filterRepeatedLetters(["a", "b", "c", "a", "d", "w"])).toStrictEqual(["a"]);
});
test("Devuelve un array con las letras que se repiten dentro del mismo", ()=> {
    expect(filterRepeatedLetters(["a", "b", "c", "d", "w"])).toStrictEqual([]);
});
test("Devuelve un array con las letras que se repiten dentro del mismo", ()=> {
    expect(filterRepeatedLetters(["b", "a", "c", "a", "3", "b"])).toStrictEqual(["b", "a"]);
})
test("Devuelve un array con las letras que se repiten dentro del mismo", ()=> {
    expect(filterRepeatedLetters(["a", "b", "c", "1", "d", "1"])).toStrictEqual(["1"]);
});
test("Devuelve un array con las letras que se repiten dentro del mismo", ()=> {
    expect(filterRepeatedLetters(["a", "b", "c", "e", "d", "w"])).toStrictEqual([]);
});