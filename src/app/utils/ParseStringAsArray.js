ParseStringAsArray = arrayAsString =>
    arrayAsString.split(',').map(string => string.trim());

module.exports = ParseStringAsArray;
