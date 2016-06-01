
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(true === true, 'what will satisfy the ok assertion?');
    ok(1 === 1 === true, 'what will satisfy the ok assertion?');
    ok(1 == '1' === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(false === false, 'what is a false value?');
    ok(false === false, 'what is a false value?');
    ok(false === false, 'what is a false value?');
});

test("equal", function() {
    equal(4/2, 1 + 1, 'what will satisfy the equal assertion?');
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
    equal(4-2, 1 + 1, 'what will satisfy the equal assertion?');
});
