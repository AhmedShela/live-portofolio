'use strict';
// importing the express library;
const express = require('express');
const {request, response} = require('express');

// create an image of the express;
const server = express();

// create new port to use when we deply the website to Heroku;
// thhis line of code means the the port is going to be the port that heroku gaves you or the port 3000;
// note that the port must be a number more than 0 and not more 65536;
const PORT = process.env.PORT || 5555;

// now we neeed to test if the server listining to the port;
// using npm start
// http://localhost:3000/index
server.get('/index', (request, response) => {
    response.send('Get out of my page')
});

server.get('/data', (request, response) => {
    let family = [
        {
            name: 'Ahmad'
        }, {
            father: 'Louae'
        }, {
            last: 'Shela'
        },
    ];
    response.json(family)
})

server.use(express.static('./public'));
server.listen(PORT, () => {
    console.log('I am listining on port : ', PORT);
});
