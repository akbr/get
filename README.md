# get :mailbox_with_mail:

**A function for safely querying objects and arrays.**

Suprisingly useful.

## Quickstart

```javascript
// Start with some data:
var profile = {
  name: 'Aaron',
  features: {
    hair: 'brown',
    weight: 180
  },
  lived: ['Oregon', 'Washington', 'California', 'DC']
};

// Let's query it!
get(profile, 'name'); // 'Aaron'
get(profile, 'features.hair'); // 'brown'
get(profile, ['features', 'hair']); // 'brown'
get(profile, 'lived.3'); // 'DC'

// Or, get fancy with a function.
get(profile, (target, get) => {
  return {
    name: get(target, 'name'),
    foo: 'bar'
  }
}); // {name: 'Aaron', foo: 'bar'}

// Queries can also return undefined or null.
// null indicates a query that would have probably otherwise thrown
get(profile, 'features.shoeSize'); // undefined
get(profile, 'features.just.too.deep'); // null
```

## API
### get(target, path)

A `target` can be whatever. (But I suggest an `object` or an `array`. :wink:)

A `path` can be:
* A string, with dot notation for nesting;
* A number;
* An array, with multiple values for nesting;
* A function, which will receive `(target, get)`.