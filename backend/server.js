const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'frontend/dist/frontend')));
app.use(cors());
server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'frontend/dist/frontend'));
});
app.get('/api', (req, res) => {
    res.send({message: 'message working'});
});
server.listen(port, () => {
    console.log(`server is listening on port: ${port || '3000'}`);
});