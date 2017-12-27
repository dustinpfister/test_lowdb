let low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
adapter = new FileSync('db.json'),

db = low(adapter);

// set defaults for the db
db.defaults({
    earnings: []
}).write();

// something to add to the db
let today = {
    date: '2017-12-27',
    cash: 87.50,
    unit: 'USD'
};

// push and write to the db
db.get('earnings').push(today).write();
