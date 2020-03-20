const express = require('express');
const port = 5000;
const server = express();

// GET request
server.get('/', (req, res) => {
    res.send('Hello from Express!');
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});