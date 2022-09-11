const app = require('./src/app.js');
const {pool} = require('./src/database.js');


pool.getConnection(function(err, connection) {
    if (err) console.log("Not connected");

    else if(connection){
        console.log("Connected successfully but not forever")
        connection.release();
    }
});

app.listen(app.get('port'),( () => {
    console.log(`Listenig on port ${app.get('port')}`)
}))