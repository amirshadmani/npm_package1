var colors = require('colors');
// import {colors} from 'colors';

function output() {
  return 'hello from package1'.green;
}

module.exports.output = output;

// console.log('hello'.blue);