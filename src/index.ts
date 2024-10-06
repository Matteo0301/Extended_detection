// Import the 'express' module
import express from 'express';
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'matteo',
    database: 'test',
    password: 'password',
});


// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get('/', (req, res) => {

    // A simple SELECT query
    connection.query(
        'SELECT name FROM `test`',
        function (err: any, results: any, fields: any) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            res.send('Hello ' + results[0]['name']);
        }
    );
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});