'use strict';
const utils = {
    // it should receive an iterable element and call the received function with each element
    // of the iterable object
    forEach(iterable, fn) {

            let iterator = iterable[Symbol.iterator](),
                next;
            do {
                next = iterator.next();
                if (!!fn) {
                    fn(next.value);
                }
            } while (!next.done)

        },

        // it should receive an infinite number or parameters and return the multiplication of all
        // do not use "forEach", "map" or "reduce"
        multiply(...params) {

            if (!params || params.length === 0) {
                throw new Error("missing params");
            }

            let m = 1;
            for (let p of params) {
                if (typeof p === 'number' && p !== NaN) {
                    m = m * +p;
                } else {
                    throw new Error("NaN");
                }
            }
            return m;
        },

        // it should return an array of arrays, each array element will have only two elements,
        // the first one representing the key names and the second one its values
        // it should also check if the given parameters it's an object and throw an error otherwise
        // Example: entries({a:1, b:2, c:3}) === [['a',1], ['b', 2], ['c',3]]
        entries(obj) {

            if ((!obj || typeof obj !== 'object') && typeof obj !== 'function') {
                throw new Error("Not and Object");
            }

            let arr = [];
            for (let prop in obj) {
                arr.push([prop, obj[prop]]);
            }
            return arr;
        },

        // it should return the same object, adding the functionality to be consumed as an iterable
        // it should also check if the given parameters it's an object and throw an error otherwise
        // Example: 
        // for (let x of makeIterable({a:1,b:2})) {
        //   console.log(x);
        // }
        // should print ['a',1], ['b', 2]
        makeIterable(obj) {

            let entries = this.entries(obj);

            obj[Symbol.iterator] = function() {
                let cur = 0, prev,
                    value;

                return {
                    next: function() {
                        value = entries[cur];
                        prev = cur;
                        cur = cur + 1;

                        return {
                            value: value ? value : null,
                            done: prev === (entries.length)
                        };
                    }
                };
            };

            return obj;
        }
};


module.exports = utils;
