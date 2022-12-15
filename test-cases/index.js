const express = require('express');
const path = require('path');

const app = express();
const port = 4040;

app.use(express.static(path.join(__dirname, '../').replace('/test-cases', '') + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index1.html');
})
app.listen(port, () => {
    console.log('https://localhost:' + port)
})