/* Ejercicio 1
Escribe una función llamada numDuplicados que reciba
un string y retorne el número de caracteres que aparecen
más de una vez.
*/

const numDuplicados = (str) => {
  const diccio = [];
  str.split("").map((x, i, arr) => {
    if (!diccio.includes(x) && arr.indexOf(x) !== i) {
      diccio.push(x);
    }
  });
  return diccio.length;
};

/* Ejercicio 2
  Escribe una función llamada `frecuencias` 
  que reciba una cadena de texto y retorne 
  un objeto con el número de veces que aparece 
  cada caracter (exceptuando el espacio en blanco)
  */

const frecuencias = (str) => {
  let cont = {};
  arr = str.replace(/\s+/g, "").split("");
  for (let i of arr) {
    if (cont[i]) cont[i]++;
    else cont[i] = 1;
  }
  return cont;
};

/* Ejercicio 3
  Crea una función llamada `caracteresEnComun` que recibe 
  dos argumentos: `str1` y `str2`. La función debe retornar 
  un arreglo con todos los caracteres que las dos cadenas 
  tienen en común.
   */
const caracteresEnComun = (str1, str2) => {
  const diccio = [];
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  arr1.map((e) => {
    if (arr2.includes(e)) {
      diccio.push(e);
    }
  });
  return diccio;
};

/* Ejercicio 4
  Escribir una función llamada `ajustarTexto` que reciba 
  dos argumentos:  un string y un número (que representa una longitud).
  La función debe retornar la cadena ajustada a la longitud recibida.
  Si la longitud de la cadena es mayor al número, debes recortar la cadena.
  De lo contrario agrega espacios en blanco hasta completar la longitud.
  */

const ajustarTexto = (str, num) => {
  let strAju = str;
  if (str.length > num) {
    return str.slice(0, -num);
  } else if (str.length === num) {
    return strAju;
  } else if (num < 0) {
    return strAju;
  }
  for (let i = 0; i < num - str.length; i++) {
    strAju = strAju + " ";
  }
  return strAju;
};

/* Ejercicios de Leetcode */

const isAnagram = (s, t) => {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
};

const moveZeroes = (nums) => {
  const ceros = [];
  const newArr = nums.filter((e) => {
    if (e === 0) {
      ceros.push(e);
    }
    return e;
  });
  return [...newArr, ...ceros];
};

const twoSum = (nums, target) => {
  const newArr = [];
  nums.reduce((prev, curr, i, arr) => {
    if (prev + curr === target && newArr.length === 0) {
      newArr.push(i - 1, i);
    }
    return curr;
  });
  return newArr;
};

module.exports = {
  numDuplicados,
  frecuencias,
  caracteresEnComun,
  ajustarTexto,
  isAnagram,
  moveZeroes,
  twoSum,
};
