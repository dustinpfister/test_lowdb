let low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
adapter = new FileSync('update.json'),

db = low(adapter);

// set defaults for the db
db.defaults({
    users: []
}).write();

let users = db.get('users');

// add one user if we have none
if (users.value().length === 0) {

    // call him jerry
    users.push({

        name: 'jerry',
        lastOn: new Date(),
        visits: 0

    }).write();

}

// find  and update jerry
let jerry = db.get('users').find({name:'jerry'});
let visits = jerry.value().visits;

jerry.assign({visits:visits += 1,lastOn : new Date()}).write();

console.log( jerry.value() );
