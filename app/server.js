const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing
app.use('/', express.static(__dirname + '/view'));

const toolsRouter = require('./apis/tools');

app.use('/tools', toolsRouter);

app.listen(3000, function () {console.log('started');}
