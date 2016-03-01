import tap, { test } from 'tap';
import math from '../src/math.js';

test("Deberia retornar true para un entero", (t) => {

    t.true(math.isInteger(1));

    t.end();

});

test("Deberia retornar false para un no entero", (t) => {

    t.false(math.isInteger(1.2));
    t.false(math.isInteger("asd"));
    t.false(math.isInteger({}));
    t.false(math.isInteger(null));
    t.false(math.isInteger(undefined));

    t.end();
});

test("Deberia poder castear a numero", (t) => {

    t.doesNotThrow(() => math.checkNumberCoersion("1"));
    t.doesNotThrow(() => math.checkNumberCoersion("1.2"));
    t.doesNotThrow(() => math.checkNumberCoersion(1));
    t.doesNotThrow(() => math.checkNumberCoersion(1.2));
    t.doesNotThrow(() => math.checkNumberCoersion(null));

    t.end();
});

test("Deberia fallar al castear a numero", (t) => {

    t.throws(() => math.checkNumberCoersion("a"));
    t.throws(() => math.checkNumberCoersion(undefined));
    t.throws(() => math.checkNumberCoersion(NaN));
    t.throws(() => math.checkNumberCoersion({}));

    t.end();
});

test("Deberia fallar invocar a aritmeticTemplate", (t) => {

    t.throws(() => math.aritmeticTemplate("a"));
    t.throws(() => math.aritmeticTemplate([]));
    t.throws(() => math.aritmeticTemplate(null));

    t.throws(() => math.aritmeticTemplate([1, 2]));

    t.throws(() => math.aritmeticTemplate([1, 2], null));
    t.throws(() => math.aritmeticTemplate([1, 2], undefined));
    t.throws(() => math.aritmeticTemplate([1, 2], '+'));
    t.throws(() => math.aritmeticTemplate([1, 2], '*'));
    t.throws(() => math.aritmeticTemplate([1, 2], '-'));

    t.throws(() => math.aritmeticTemplate([1, 'a'], '+', 1));
    t.throws(() => math.aritmeticTemplate([1, (Number.MAX_SAFE_INTEGER + 10)], '*', 1));
    t.throws(() => math.aritmeticTemplate([1, 2], '-', 1));

    t.throws(() => math.aritmeticTemplate([1, 2], '-', 'a'));
    t.throws(() => math.aritmeticTemplate([1, 2], '-', null));
    t.throws(() => math.aritmeticTemplate([1, 2], '-', {}));
    t.throws(() => math.aritmeticTemplate([1, 2], '-', []));
    t.throws(() => math.aritmeticTemplate([1, 2], '-', []));

    t.end();
});

test("Deberia sumar bien", (t) => {

    t.equals(math.sum(1, 2, 3), 6);
    t.equals(math.sum(5), 5);
    t.equals(math.sum(), 0);
    t.equals(math.sum(null), 0);

    t.end();
});

test("Deberia fallar al intentar sumar", (t) => {

    t.throws(() => math.sum(1, "a", 3));
    t.throws(() => math.sum(undefined));

    t.end();
});

test("Deberia multiplicar bien", (t) => {

    t.equals(math.multiply(1, 2, 3), 6);
    t.equals(math.multiply(2), 2);
    t.equals(math.multiply(), 1);
    t.equals(math.multiply(0), 0);
    t.equals(math.multiply(null), 0);

    t.end();
});

test("Deberia fallar al intentar multiplicar", (t) => {

    t.throws(() => math.multiply(1, "a", 3));
    t.throws(() => math.multiply(undefined));

    t.end();
});

test("Deberia fallar invocar a factorial", (t) => {

    t.throws(() => math.factorial(""));
    t.throws(() => math.factorial());
    t.throws(() => math.factorial(null));
    t.throws(() => math.factorial(undefined));
    t.throws(() => math.factorial(-1));
    t.throws(() => math.factorial((Number.MAX_SAFE_INTEGER + 10)));

    t.end();

});

test("Deberia calcular el factorial", (t) => {

    t.equals(math.factorial(3), 6);
    t.equals(math.factorial(10), 3628800);

    t.end();
});

test("Deberia fallar invocar a fibonacci", (t) => {

    t.throws(() => math.fibonacci(""));
    t.throws(() => math.fibonacci());
    t.throws(() => math.fibonacci(null));
    t.throws(() => math.fibonacci(undefined));
    t.throws(() => math.fibonacci(-1));
    t.throws(() => math.fibonacci(Number.MAX_SAFE_INTEGER + 10));

    t.end();
});

test("Deberia calcular el fibonacci", (t) => {

    t.equals(math.fibonacci(3), 2);
    t.equals(math.fibonacci(10), 55);

    t.end();
});

test("Deberia fallar invocar a avg", (t) => {

    t.throws(() => math.avg(""));
    t.throws(() => math.avg());
    t.throws(() => math.avg(null));
    t.throws(() => math.avg(undefined));
    t.throws(() => math.avg(-1));
    t.throws(() => math.avg([]));
    t.throws(() => math.avg([1, "asd"]));

    t.end();
});

test("Deberia calcular el avg", (t) => {

    t.equals(math.avg([1, 2, 3]), 2);
    t.equals(math.avg([1, 2, 3, 4]), 2.5);

    t.end();
});


test("Deberia fallar invocar a median", (t) => {

    t.throws(() => math.median(""));
    t.throws(() => math.median());
    t.throws(() => math.median(null));
    t.throws(() => math.median(undefined));
    t.throws(() => math.median(-1));
    t.throws(() => math.median([]));
    t.throws(() => math.median([1, "asd"]));
    t.throws(() => math.median([20, (Number.MAX_SAFE_INTEGER + 10)]));

    t.end();
});

test("Deberia calcular el median", (t) => {

    t.equals(math.median([1, 2, 3]), 2);
    t.equals(math.median([1, 2, 3, 4]), 2.5);

    t.end();
});
