var restify = require('restify');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/drones', function(req, res, next) {
    res.send('List of drones: [TODO]');
    return next();
});

server.get('/drones/:id', function(req, res, next) {
    res.send('Current values for drone ' + req.params['id'] + ': [TODO]');
    return next();
});

server.post('/drones/:id', function(req, res, next) {
    res.send('Data received from drone [TODO]');

    console.log(req.body);

    return next();
});

server.listen(8011, function() {
    console.log('%s listening at %s', server.name, server.url);
});
const pgtools = require("pgtools");
const config = {
  user: "postgres",
  host: "localhost",
  password: "Belfast2022",
  port: 5432
};

pgtools.(config, "myFirstDb", function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});