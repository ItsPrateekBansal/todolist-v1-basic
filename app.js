const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
var items = [];


var today = new Date();
var options = {
  weekend:'long',
  weekday:'long',
  month:'long',
  day:'numeric'
}
app.get("/",function(req,res){
  res.render('list.ejs',{dayD:today.toLocaleDateString("hi-IN",options),newItem:items});
})

app.post("/",function(req,res){
  var item = req.body.nextTask;
  items.push(item);
  res.redirect("/");
})



app.listen(3000, (req, res) => {
  console.log("listening...@3000");
});
