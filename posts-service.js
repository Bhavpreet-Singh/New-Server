const express = require('express');
const axios = require('axios');
const app = express();

app.get('/posts', (req, res) => {
    res.json(books);
});

app.post('/posts', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).send();
});

app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const book = req.body;
    let index = books.findIndex((book) => book.id === id);
    if(index !== -1){
        books[index] = book;
        req.send();
    } else{
        res.status(404).send();
    }
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    let index = books.findIndex((book) => book.id == id);
    if (index !== -1){
        books.splice(index, 1);
        res.send();
    } else {
        req.status(404).send();
    }
});

app.listen(3005, () => console.log('Posts Service running on port 3005'));
