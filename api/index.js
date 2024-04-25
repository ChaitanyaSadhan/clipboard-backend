


const express = require('express');
const request = require('request');



const TOKEN = '6905097620:AAFB7v5jJ1Aa4Sv-5rPdFgPc-LhHIwBTgOg';
const chat_id = '2143276019';

const app = express();

app.listen(3000, ()=>{
    console.log('server started...');
});

app.get('/send/:msg',  (req, res)=>{
    message = req.params.msg;
    let msgresponse = 0;
    uri = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${message}`;
    
    
    request(uri, async(err, res, body) =>{
        if(!err && res.statusCode == 200){
            console.log('success');
        }else{
            console.log('fail');
        }
    }).then(res.send(`clipboard: ${message}   is saved.`));
    // res.send(`clipboard: ${message}   is saved.`);


})


module.exports = app;