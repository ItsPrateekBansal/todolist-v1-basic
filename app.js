const express = require('express');
const bodyParser = require('body-parser');
var items = [];
var workItems = [];
const app = express();
const date = require(__dirname+"/day.js");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {

  res.render('list', {
    listItem: date.getday(),
    newListItems:items,
    listType:"home"
  });
});

app.post("/", function(req, res) {
  var type = req.body.button;
  var item = req.body.newItem;
  console.log(item)
  if(type === 'home'){
    items.push(item);
    res.redirect("/");
  }
  else if(type == 'work'){
    workItems.push(item);
    res.redirect("/work");
  }

})



app.get("/work",function(req,res){
  // res.render({listItem: "Work List",newListItems:workItems});
    var today = new Date();
  res.render('list',{
    listItem:"Work List",
    newListItems:workItems,
    listType:"work"
  });
})

app.listen(3000, (req, res) => {
  console.log("listening... @ PORT 3001");
});
