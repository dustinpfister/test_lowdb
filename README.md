# Test_lowdb

testing out the npmjs package [lowdb](https://www.npmjs.com/package/lowdb) that allows for a small JSON database in node.js.

## Setup

Clone it in with git, and run a npm install to get lowdb and any other packages I might have used in this test project.

```
$ git clone https://github.com/dustinpfister/test_lowdb
$ cd test_lowdb
$ npm install
```

## basic.js

The basic script is just that, a basic example of using low.db.

```
$ node basic
```

This will give a db.json in the root path that looks like this:

```js
{
  "earnings": [
    {
      "date": "2017-12-27",
      "cash": 87.5,
      "unit": "USD"
    }
  ]
}
```