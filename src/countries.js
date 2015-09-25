var countries = require('country-data').countries.all.map(function(item){
    return item.name;
});
module.exports = countries;