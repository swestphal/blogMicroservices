const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto')

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    req.send(commentsByPostId[req.params.id]) || {}
});

app.get('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];

    comments.push({ id: commentId, content});
    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(40001, () => {
    console.log("listening on 40001")
})