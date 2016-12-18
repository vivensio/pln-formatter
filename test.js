require('should');
const plnFormatter = require('./plnFormatter')

describe('plnFormatter', function () {

    it ("should convert numbers into polish currency notation", function () {
        plnFormatter('25632').should.equal("25.632,00");
        plnFormatter('1000').should.equal("1.000,00");
        plnFormatter('1000', '.').should.equal("1.000,00");
        plnFormatter('1000', ' ').should.equal("1 000,00");
        plnFormatter('123456789').should.equal("123.456.789,00");
        plnFormatter('5682', '').should.equal("5.682,00");
    });

});