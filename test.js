var assert = require('assert');
var get = require('./index.js');

var me = {
  name: 'Aaron',
  features: {
    hair: 'brown',
    weight: 180,
  },
  lived: ['Oregon', 'Washington', 'California', 'DC']
};

assert.equal(
  get(null, "a.b.c"), null
);

assert.equal(
  get(me), me
);

assert.equal(
  get(me, 'name'), 'Aaron'
);

assert.equal(
  get(me, 'features.hair'), 'brown'
);

assert.equal(
  get(me, 'lived.3'), 'DC'
);

assert.equal(
  get(me, (obj, get) => get(obj, 'name')), 'Aaron'
);

assert.equal(
  get(me, 'features.hair.style'), undefined
);

assert.equal(
  get(me, 'features.hair.style.deeper'), null
);

let err = new Error();
assert.equal(
  get(me, 'features.hair.style.deeper', err) instanceof Error, true
);

assert.equal(
  get(me, null), me
);

console.log("Success!");