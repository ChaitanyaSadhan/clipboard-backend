


const express = require('express');
const request = require('request');



const TOKEN = '6905097620:AAFB7v5jJ1Aa4Sv-5rPdFgPc-LhHIwBTgOg';
const chat_id = '2143276019';

const app = express();

app.listen(3000, ()=>{
    console.log('server started...');
})

app.get('/push/:msg',  async(req, res)=>{
    message = req.params.msg;
    uri = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${message}`;
    
    const response = await fetch(uri);
    const jsonResponse = await response.json();
    
    
        
    res.send(`
    <html>
        <head>
            <title>HTML Elements Reference</title>
        </head>

        <body>

        <h1>clipboard: ${jsonResponse.result.text}</h1>
        <h3>--- Thanks Chai :)</h3>
        </body>
    </html>
    `);
    // console.log(`clipboard: ${jsonResponse.result.text} \n ------- thanks chai:)`);

})

app.get('/pull', async(req,res)=>{
    uri = `https://api.telegram.org/bot${TOKEN}/getUpdates`;
    const response = await fetch(uri);
    const jsonResponse = await response.json();
    // console.log(jsonResponse.result[5].message.text);
    result = jsonResponse.result;
    res.send(`
    <html>
        <head>
            <title>Clipboard-Pull</title>
        </head>

        <body>

        <h1>clipboard:   ${result[result.length -1].message.text}</h1>
        <h3>--- Thanks Chai :)</h3>
        </body>
    </html>
    `);
});


module.exports = app;