module.exports = function(app) {
  var express = require('express');
  var bandRouter = express.Router();

  var BANDS = [
    {
      id: 1,
      name: 'Bad Motha Goose'
    },
    {
      id: 2,
      name: 'Concrete Octopus'
    }
  ];

  bandRouter.get('/', function(req, res) {
    var ids = req.query.ids;
    var bands;

    if (ids) {
      bands = BANDS.filter(function(b) {
        return ids.indexOf(b.id.toString()) > -1;
      });
    }
    else {
      bands = BANDS;
    }

    res.send({"bands": bands});
  });

  app.use('/bands', bandRouter);
};
