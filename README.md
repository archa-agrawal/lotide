# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @agrawal/lotide`

**Require it:**

`const _ = require('@agrawal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation
The following functions are currently implemented:

* `head())`: takes an array and returns the head
* `tail())`: takes an array and returns the tail
* `middle()`: takes an array and returns the middle value/s of the array
* `countLetters()`: takes a string and returns an object with the count of all the lettres of that string
* `countOnly())`: takes an array and an objects. Counts the number of occurance of keys in the array for which the object has true value. returns the new object.
* `findKey()`: takes an object and a callback function.Returns the first key for which the callback function is true.
* `findKeyByValue()`: takes an object and a value. Returns the key which holds the value that has been passes as parameter.
* `letterPositions()`: takes a string. Returns an object containg the key of each letter and values of index/es of that letter.
* `map()`: takes an array and a callback function. Returns a new array after performing the action of callback function on each element of the array.
* `takeUntil()`: takes an array and a callback function. Returns a new array containing all the values of the array until the value of callbak function becomes true.
* `without()`: takes two arrays. Returns a new array after deleting all the items presnt in array1 which were also presnt in array2.
