const express = require('express');
const mongoose = require('mongoose');
const Clip = require('./models/clip.js');

//express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://igniteduser:igniteduser@clipboard-cluster.n63syjd.mongodb.net/clipboard-db?retryWrites=true&w=majority&appName=clipboard-cluster';
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connection established.');
        //listening for requests.
        app.listen(3000);
    })
    .catch((err)=>{
        console.log(err);
    })


//mongoose routes.
app.get('/add', (req, res)=>{
    const clip = new Clip({
        data: 'chaitanya sadhan   3',
        tag: 'thanks chaitu:)'

    });
    clip.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=> console.log(err))
});

app.get('/all', (req, res)=>{
    Clip.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
});

app.get('/clip', (req, res)=>{
    Clip.findById('6608001f26d4fcba815ea7a3')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
});
app.post('/test-post', (req, res) =>{
    console.log(req);
    res.send('a;df');
});

module.exports = app;





