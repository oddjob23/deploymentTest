const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path')
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'frontend/dist/frontend')));

server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'frontend/dist/frontend'));
})
server.listen(port || '3000', () => {
    console.log(`server is listening on port: ${port || '3000'}`);
});