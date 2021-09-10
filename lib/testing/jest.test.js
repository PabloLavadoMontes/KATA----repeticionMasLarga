"use strict";
/* Busque el carácter con la repetición consecutiva más larga y regrese:
[Letra, Cantidad] */
Object.defineProperty(exports, "__esModule", { value: true });
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
const index_1 = require("../index");
// longestRepetition:
test("Devuelve el caracter que más se repite y su cantidad", () => {
    expect(index_1.longestRepetition("aesdaasaaa")).toStrictEqual(["a", 3]);
});
test("Devuelve el caracter que más se repite y su cantidad", () => {
    expect(index_1.longestRepetition("sdgvaasdvfdeerrrfsssssdzz")).toStrictEqual(["s", 5]);
});
test("Devuelve el caracter que más se repite y su cantidad", () => {
    expect(index_1.longestRepetition("")).toStrictEqual(["", 0]);
});
test("Devuelve el caracter que más se repite y su cantidad", () => {
    expect(index_1.longestRepetition("zzzzza")).toStrictEqual(["z", 5]);
});
test("Devuelve el caracter que más se repite y su cantidad", () => {
    expect(index_1.longestRepetition("rrraaasssdaeee")).toStrictEqual(["r", 3]);
});
// stringToArray:
test("Transforma un string en varias letras dentro de un array que devuelve", () => {
    expect(index_1.stringToArray("perro")).toStrictEqual(["p", "e", "r", "r", "o"]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", () => {
    expect(index_1.stringToArray("nataliporrr")).toStrictEqual(["n", "a", "t", "a", "l", "i", "p", "o", "r", "r", "r"]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", () => {
    expect(index_1.stringToArray("zzzzza")).toStrictEqual(["z", "z", "z", "z", "z", "a"]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", () => {
    expect(index_1.stringToArray("")).toStrictEqual([]);
});
test("Transforma un string en varias letras dentro de un array que devuelve", () => {
    expect(index_1.stringToArray("asasa")).toStrictEqual(["a", "s", "a", "s", "a"]);
});
// countRepetitions:
test("Devuelve el número de veces que se repite un elemento dentro de un array", () => {
    expect(index_1.countRepetitions(["z", 1, "z", 2, "j", 3, "r", 2, "y", 6, "b", 3], "z")).toBe(2);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", () => {
    expect(index_1.countRepetitions([], "s")).toBe(0);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", () => {
    expect(index_1.countRepetitions(["x", 2, "z", 2, "j", 3, "r", 2, "y", 6, "b", 3], 2)).toBe(3);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", () => {
    expect(index_1.countRepetitions(["p", "a", 0, "h"], "h")).toBe(1);
});
test("Devuelve el número de veces que se repite un elemento dentro de un array", () => {
    expect(index_1.countRepetitions([], "")).toBe(0);
});
// filterRepeatedLetters:
test("Devuelve un array con las letras que se repiten dentro del mismo", () => {
    expect(index_1.filterRepeatedLetters(["a", "b", "c", "a", "d", "w"])).toStrictEqual(["a"]);
});
test("Devuelve un array con las letras que se repiten dentro del mismo", () => {
    expect(index_1.filterRepeatedLetters(["a", "b", "c", "d", "w"])).toStrictEqual([]);
});
test("Devuelve un array con las letras que se repiten dentro del mismo", () => {
});
test("Devuelve un array con las letras que se repiten dentro del mismo", () => {
    expect(index_1.filterRepeatedLetters(["a", "b", "c", "1", "d", "1"])).toStrictEqual(["1"]);
});
test("Devuelve un array con las letras que se repiten dentro del mismo", () => {
    expect(index_1.filterRepeatedLetters(["a", "b", "c", "e", "d", "w"])).toStrictEqual([]);
});
//# sourceMappingURL=jest.test.js.map