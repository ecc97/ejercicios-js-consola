// 1.
let num1 = "3";
let num2 = "2";

console.log(parseInt(num1+num2))

//2.
let simpleString1 = "Hola";
let simpleString2 = "Mundo";

console.log(`Longitud 1: ${simpleString1.length}, Longitud 2: ${simpleString2.length}`)

//3.
let stringUsingString1 = String('JavaScript')
let stringUsingString2 = String('Ejercicios')

//4.
let stringUsingNewString1 = String('Concatenar')
let stringUsingNewString2 = String('Strings')

//5.
console.log(simpleString1.substring(2))

//6.
console.log(simpleString2.substring(2))

//7.
console.log(simpleString1.concat(' ', simpleString2))

//8.
console.log(simpleString1+" "+simpleString2)

//9.
console.log(`${simpleString1} ${simpleString2}`)

//10.
let stringWithSpaces1 = '             TrimStart'
let stringWithSpaces2 = 'TrimEnd               '
console.log(stringWithSpaces1.trimStart())
console.log(stringWithSpaces2.trimEnd())

//11.
console.log(simpleString1.replace("o","i"))

//12.
console.log(simpleString2.slice(0,3))

//13.
console.log(simpleString2.substring(2))

//14.
console.log(simpleString1.repeat(2))

//15.
let prayer = "Esto es una oración de ejemplo" ;
console.log(prayer.split(" "))

//16.
console.log(simpleString2.toUpperCase())

//17.
console.log(simpleString1.toLowerCase())

//18.
let bool = true;
console.log(typeof(bool))

//19.
let array = ["Hola", 10, true]
console.log(array.length)

//20.
let object = {'name': 'Edwin', 'age': 23, 'male': true }
console.log(object.name)

//21.
let empty = null;
console.log(typeof(empty))

//22.
let notdefinite;
console.log(typeof(notdefinite))

//23.
let decimal = 1.7;
console.log(typeof(decimal))

//24.
let negative = -1;
console.log(typeof(negative))

//25.
let stringI = "Casa";
console.log(stringI.indexOf("a"))

//26.
console.log(stringUsingString1.includes("Script"))

//27.
console.log(simpleString1.concat(), simpleString2.concat())

//28.
console.log(simpleString1+" "+simpleString2)

//29.
console.log(`${simpleString1} ${simpleString2}`)

//30.
let cadenaConEspacios = "       Ejemplo con espacios        "
console.log(cadenaConEspacios.trim());

//31.
let cadenaReplace = "El cielo es azul"
console.log(cadenaReplace.replace("azul", "rojo"))

//32.
let cadenaSlice = "Programaciòn"
console.log(cadenaSlice.slice(-4))

//33.
console.log(stringUsingString1.substring(2))

//34.
console.log(simpleString1.repeat(3))

//35.
console.log(prayer.split(" "))

//36.
console.log(stringUsingString1.toUpperCase())

//37.
let stringMays = "EJEMPLO"
console.log(stringMays.toLowerCase())

//38.
let numero = 23
console.log(typeof(numero))

//39.
let boole = false
console.log(typeof(boole))

//40.
console.log(array.length)

//41.
console.log(object.age)

//42.
let nullValue = null
console.log(typeof(nullValue))

//43.
console.log(typeof(notdefinite))

//44.
let decimalFloat = 3.7;
console.log(typeof(decimalFloat))