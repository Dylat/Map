//.map() - returns new array where items in original have changed
//exercise 1 array of number to array of words
/*
const converter = require('number-to-words');

var toWords= '';

const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2];
var map1=
numbers.map(m=>{return converter + toWords;});

console.log(map1);

//exercise 2 Use the map function to add 10 to array of numbers 
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
var map1= numbers.map(m=>{return numbers + 10})
console.log(map1);

//exercise 3 Use the map function and hyperscript to tranform a list of strings to
//an unordered list NOT COMPLETE
const h = require('hyperscript')
const buzzwords = require('buzzwords')


const li = (w) => h('li', w)
var map1 = buzzwords.map(m => { return buzzwords})

console.log(h('ul', buzzwords))



//exercise 4 Use the map function to convert a list of colors to their rgb code. 

const convert = require('color-convert')
const cssColorList = require('css-color-list')
// ex: convert.keyword.rgb('red')
var colors1= cssColorList().map(m=>{return convert.keyword.rgb(m)})
console.log(colors1);
*/
//exercise 5  Use the map function transform a list of movies objects from a movie
//db search into a list of movie posters.