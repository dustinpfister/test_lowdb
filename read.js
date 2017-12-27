let low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),

adapter = new FileSync('db.json'),
db = low(adapter);

db.defaults({
    earnings: []
}).write();

console.log( db.getState() );