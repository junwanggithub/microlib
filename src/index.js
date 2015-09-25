var uniqueRandomArray = require('unique-random-array');
var countries = require('./countries.js');
module.exports = {
    all: countries,
    random: uniqueRandomArray(countries)
};