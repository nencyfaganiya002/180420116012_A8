var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/process_request', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
      mobile:req.query.mobile,
      email:req.query.email,
      address:req.query.address,
      dob:req.query.dob,
      gender:req.query.gender,
      username:req.query.username,
      Epassword:req.query.Epassword
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})