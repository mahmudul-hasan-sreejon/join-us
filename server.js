const express = require('express');
const bodyParser = require('body-parser');
const globalConfig = require('./config/global.config.js');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

require('./app/routes/user.routes.js')(app);

const port = globalConfig.port;
app.listen(port, () => {
	console.log(`Listening on port ${port}...\n`);
});
