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
    if (users[id]) {
        res.status(200).send(users[id]);
    }
    else {
        res.status(400).send('Error:  User does not exist!  Please correct the parameters!');
    }
});

// PUT/PATCH request [UPDATE]
server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    if (users[id]) {
        const patch = req.body;
        users[id] = patch;
        res.status(200).send(patch);
    }
    else {
        res.status(400).send('Error:  User does not exist!  Please correct the parameters!');
    }

});

// DELETE request [DELETE]
server.delete('/api/users/:id', (req, res) => {
    
});



/* ------------------------- */

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});