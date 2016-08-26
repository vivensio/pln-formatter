'use strict'

module.exports = (number, separator) => {

    var num = number.replace(/[ .]/g, ""),
    zl = num.split(',')[0],
    gr = num.split(',')[1],
    length = zl.length,
    first = zl.substring(0, length % 3),
    rest  = '';

    if (!separator) {
        separator = '.';
    }

    for (var i = 0; i < length - first.length; i += 3) {
        var from = i + (length % 3);

        if (!(i == 0 && length % 3 == 0))
        rest += separator;
        
        rest += zl.substring(from, from + 3);
    }

    rest += ',' + (gr ? gr : '00');
    return first + rest;
}