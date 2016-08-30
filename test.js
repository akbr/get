var get = require('./index.js');
var expect = require('expect');

var me = {
  name: 'Aaron',
  features: {
    hair: 'brown',
    weight: 180,
  },
  lived: ['Oregon', 'Washington', 'California', 'DC']
};

expect(
  get(me)
).toBe(me);

expect(
  get(me, 'name')
).toEqual('Aaron');

expect(
  get(me, 'features.hair')
).toEqual('brown');

expect(
  get(me, 'lived.3')
).toEqual('DC');

expect(
  get(me, (obj, get) => get(obj, 'name'))
).toEqual('Aaron');

expect(
  get(me, 'features.hair.style')
).toEqual(undefined);

expect(
  get(me, 'features.hair.style.deeper')
).toEqual(null);