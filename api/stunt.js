const request = require('request');
uri = 'https://www.google.com';
a = request(uri, (err, res, body)=>{
    if (!err && res.statusCode == 200) {
        // console.log(res) // Print the google web page.
      }
});
console.log(a);