const { expect } = require("@jest/globals");

const funciones = require("./app.js");

test("Deberia retornar caracteres que aparecen mas de una vez", () => {
  expect(funciones.numDuplicados("abcaa")).toBe(1);
});

test("Deberia retornar un objeto con el número de veces que aparece cada caracter", () => {
  expect(funciones.frecuencias("anita lava la tina")).toEqual({
    a: 6,
    i: 2,
    l: 2,
    n: 2,
    t: 2,
    v: 1,
  });
});

test("Deberia retornar un arreglo con todos los caracteres que las dos cadenas tienen en común", () => {
  expect(funciones.caracteresEnComun("German", "Gabriela")).toEqual([
    "G",
    "e",
    "r",
    "a",
  ]);
});

test("Deberia retornar la cadena ajustada a la longitud recibida", () => {
  expect(funciones.ajustarTexto("Hola", 5)).toBe("Hola ");
});

test("Deberia devolver true si t es un anagrama de s, y false si no", () => {
  expect(funciones.isAnagram("rat", "car")).toBe(false);
});

test("Deberia mover todos los 0's al final mientras mantiene el orden relativo de los elementos", () => {
  expect(funciones.moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});

test("Deberia devolver los índices de los dos números de modo que sumen target", () => {
  expect(funciones.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
