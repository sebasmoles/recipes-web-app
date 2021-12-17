const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/"));

// Trick for managing single web applications routes
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(port);