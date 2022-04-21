const express = require('express');

const router = express.Router();

const loginData=[
    {
    username: 'Hassan',
    email: "hassan@gmail.com",
    password: 'hassan123'
},
{
    username: 'admin',
    email: "admin@gmail.com",
    password: 'admin123'
},
]




router.get('/login', (req, res) => {
    res.send(loginData)
    })


    module.exports =router;