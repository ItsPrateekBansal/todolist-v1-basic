const express = require('express');
const bodyParser = require('body-parser');
var items = [];
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  res.render('list', {
    kindOfday: today.toLocaleDateString("hi-IN", options),
    newListItem:items,
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, (req, res) => {
  console.log("listening... @ PORT 3001");
});
