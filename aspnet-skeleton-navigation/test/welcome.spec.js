/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../src/welcome.ts" />
define(["require", "exports", 'src/welcome'], function (require, exports, welcomeVM) {
    var Welcome = welcomeVM.Welcome;
    describe('given we have a test suite', function () {
        var welcome = new Welcome();
        it('full name should update when first name and last name does', function () {
            welcome.firstName = "Patrick";
            welcome.lastName = "Smith";
            var expected = "Patrick Smith";
            expect(welcome.fullName).toEqual(expected);
        });
        xit('full name should update when last name does', function () {
            expect(welcome.fullName).toEqual("John Doe");
        });
        it('router on welcome to have a configure function', function () {
            expect(typeof welcome.constructor).toBe("function");
        });
        describe('true is', function () {
            it("indeed", function () {
                expect('it works').toEqual('it works');
            });
            describe('smelly test', function () {
                it("indeed", function () {
                    expect("smelly").toEqual("fart");
                });
            });
        });
    });
    describe("Asynchronous specs", function () {
        var value;
        beforeEach(function (done) {
            setTimeout(function () {
                value = 0;
                done();
            }, 1);
        });
        it("should support async execution of test preparation and expectations", function (done) {
            value++;
            expect(value).toBeGreaterThan(0);
            done();
        });
        describe("long asynchronous specs", function () {
            var originalTimeout;
            beforeEach(function () {
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;
            });
            it("takes a long time", function (done) {
                setTimeout(function () {
                    done();
                }, 3000);
            });
            afterEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
        });
    });
});
//# sourceMappingURL=welcome.spec.js.map