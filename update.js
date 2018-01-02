let low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
adapter = new FileSync('update.json'),

db = low(adapter);

// set defaults for the db
db.defaults({
    users: []
}).write();

// add one user if we have none
if (db.get('users').value().length === 0) {

    // call him jerry
    db.get('users').push({

        name: 'jerry',
        lastOn: new Date(),
        visits: 1

    }).write();

}

// always find and update 'jerry'
console.log( db.get('users').find({name:'jerry'}).value() );
