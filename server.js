const express = require('express');
const app = express();

app.listen('8080',function(){
  console.log('listenning on 8080');
})

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})

app.get('/:id',function(req,res){
  const q = req.query;
  console.log(q);
  res.send(q.name);
})
