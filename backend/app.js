const express = require('express');
const bodyParser = require ('body-parser');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const friensRoutes = require('./routes/friends-route');
const usersRoutes = require('./routes/users-route');

const app = express();

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'your_friends',
    multipleStatements: true
}));


app.use(bodyParser.json());
app.use('/api/friends',friensRoutes);
app.use('/api/users',usersRoutes);


app.listen(5000);  