
module.exports.getdate = getDate;

function getDate(){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  return today.toLocaleDateString("en-US",options);
}
exports.getday = getDay;
function getDay(){
  var today = new Date();
  var options = {
    weekday: "long",
  }
  return today.toLocaleDateString("en-US",options);
}
