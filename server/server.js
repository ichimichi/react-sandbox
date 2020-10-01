const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
var bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname,'./public')));

app.use(cors());

app.use(bodyParser.json());

const db = "mongodb://ichimichi:passw0rd@ds019123.mlab.com:19123/test-login";

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error('Error :' + err);
    } else {
        console.log('MLab: connected');
    }
})


app.get('/', (req, res)=>{
    res.send('Hello')
});

app.post('/register', (req, res) => {
    console.log(req.body)
    var passHash = bcrypt.hashSync(req.body.password, 10);

    let userData = {
        username : req.body.username,
        password : passHash
    }

    let user = new User(userData);

    user.save((err, registeredUser) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send( 'user registered' );
        }
    })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    let userData = req.body.data;
    User.findOne({ username: userData.username }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid username');
            }
            else if (bcrypt.compareSync(userData.password, user.password)) {
                res.status(200).send(
                    {
                        username: user.username,
                        result: {
                            message : 'welcome back'
                        }
                    });
            }
            else {
                res.status(401).send('Invalid password');
            }


        }
    })
})

app.listen(PORT, () => {
    console.log('Server running on localhost:' + PORT);
})
