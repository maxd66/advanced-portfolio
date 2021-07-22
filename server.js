const fs = require('fs');
const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const Visitor = require('./models/Visitor');
const { RSA_NO_PADDING } = require('constants');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// The code below points the server to a series of "route" files. These routes
// give our server a "map" of how to respond when users visit or request data
// from various URLs.
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);


// Index get routes for HTML, CSS, and JavaScript
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// GET requests
app.get('/employer', (req, res) => {
    res.sendFile(path.join(__dirname, './public/employer.html'))
})
app.get('/family', (req, res) => {
    res.sendFile(path.join(__dirname, './public/family.html'))
})
app.get('/fellowdev', (req, res) => {
    res.sendFile(path.join(__dirname, './public/fellowdev.html'))
})
app.get('/api/visitors', async (req, res) => {
    try {
        const visData = await Visitor.findAll()
        res.json(visData);
    } catch(err) {
        res.status(500).json(err);
    }
})

// POST requests
app.post('/api/visitors', async (req, res) => {
    try {
        const userData = await Visitor.create(req.body);
        res.status(200).json(userData);
    } catch(err) {res.status(400).json(err)}
})


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});