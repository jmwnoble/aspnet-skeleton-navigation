/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../src/welcome.ts" />

import welcomeVM = require('src/welcome')
import Welcome = welcomeVM.Welcome;
describe('given we have a test suite', () => {

    var welcome = new Welcome();

    it('full name should update when first name and last name does', () => {

        welcome.firstName = "Patrick";
        welcome.lastName = "Smith";

        var expected = "Patrick Smith";

        expect(welcome.fullName).toEqual(expected);
    });

    xit('full name should update when last name does', () => {
        expect(welcome.fullName).toEqual("John Doe");
    });

    it('router on welcome to have a configure function', () => {
        expect(typeof welcome.constructor).toBe("function");
    });

    describe('true is', () => {
        it("indeed", () => {
            expect('it works').toEqual('it works');
        });
        describe('smelly test', () => {
            it("indeed", () => {
                expect("smelly").toEqual("fart");
            });
        });

    });

});


describe("Asynchronous specs", () => {
    var value;


    beforeEach(done => {
        setTimeout(() => {
            value = 0;
            done();
        }, 1);
    });

    it("should support async execution of test preparation and expectations", function (done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });


    describe("long asynchronous specs", () => {
        var originalTimeout;
        beforeEach(() => {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;
        });

        it("takes a long time", done => {
            setTimeout(() => {
                done();
            }, 3000);
        });

        afterEach(() => {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
});



