const head = require('../head.js');
const assertEqual = require('../assertEqual')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(["Hell", "Lighthouse", "Labs"]), "Hello");