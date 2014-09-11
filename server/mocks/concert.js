module.exports = function(app) {
  var express = require('express');
  var concertRouter = express.Router();

  var CONCERTS = [
    {
      id: 1,
      name: 'Crazyfest',
      date: new Date('2014-10-10'),
      band_ids: [1]
    },
    {
      id: 2,
      name: 'Halloween Show',
      date: new Date('2014-10-31'),
      band_ids: [1, 2]
    }
  ];

  concertRouter.get('/', function(req, res) {
    res.send({"concerts": CONCERTS});
  });

  app.use('/concerts', concertRouter);
};
