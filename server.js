const express = require('express');
const port = 5000;
const server = express();
server.use(express.json());

const users = [
    {
        id: 0,
        name: 'John Doe',
        bio: 'Basic bro'
    },
    {
        id: 1,
        name: 'Jane Doe',
        bio: 'John\'\s Girl'
    }
];

/* CRUD Operations: */

// POST request [CREATE]
server.post('/api/users', (req, res) => {
    const newUser = req.body;
    if (newUser.name && newUser.bio) {
        newUser.id = users.length;
        users.push(newUser);
        res.status(201).json(newUser);
    }
    else {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    }
});

// GET request [READ]
server.get('/api/users', (req, res) => {
    res.status(200).send(users);
});

// GET request specified by id [READ]
server.get('/api/users/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    res.status(200).send(users[id]);
});

// PUT request [UPDATE]
server.put('/api');

// DELETE request [DELETE]



/* ------------------------- */

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});