var express = require('express');
var app = express();

app.listen(80, function () {
  app.use(express.static('.'));
});
