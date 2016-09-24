var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

//heroku usa urls https y la request que nosotros hacemos para la api de weather es http. Con esto
//hacemos la conversion de https a http
app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
