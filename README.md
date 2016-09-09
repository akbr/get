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

// Queries can also return undefined.
get(profile, 'features.shoeSize'); // undefined

// By default, get returns null to indicate a query that would probably thrown a TypeError
get(profile, 'features.just.too.deep'); // null
// Change this behavior with a fallback
get(profile, 'features.just.too.deep', 'lol'); // 'lol'
```

## API
### get(target, path[, fallback])

A `target` should be of type object. Other types will be immediately returned.

A `path` can be:
* A string, with dot notation for nesting;
* A number;
* An array, with multiple values for nesting;
* A function, which will receive `(target, get)`.

Invalid `path` values are interpreted as an empty path.

A `fallback` will be returned, if supplied, if the query would have thrown a TypeError (for trying to nest on an undefined value).

## Changelog
1.0.2 - Added `fallback` argument for invalid paths. Non-object `target`s now immediately returned.
1.0.1 - Invalid paths now interpreted as an empty path.