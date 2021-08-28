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
const index_1 = require("../src/index");
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
// getBiggestNumber:
test("Devuelve el número mayor de un array formado por strings y numbers", () => {
    expect(index_1.getBiggestNumber(["b", "a", "a", 5, "d", 2])).toBe(5);
});
test("Devuelve el número mayor de un array formado por strings y numbers", () => {
    expect(index_1.getBiggestNumber(["c", 6, "q", 5, "p", 5, "s", 10])).toBe(10);
});
test("Devuelve el número mayor de un array formado por strings y numbers", () => {
    expect(index_1.getBiggestNumber(["s", 2, "a", 5, "d", 2])).toBe(5);
});
test("Devuelve el número mayor de un array formado por strings y numbers", () => {
    expect(index_1.getBiggestNumber(["x", 22, "q", 1, "f", 22, "e", 0])).toBe(22);
});
test("Devuelve el número mayor de un array formado por strings y numbers", () => {
    expect(index_1.getBiggestNumber(["z", 1, "z", 2, "j", 3, "r", 2, "y", 6, "b", 3])).toBe(6);
});
//# sourceMappingURL=jest.test.js.map