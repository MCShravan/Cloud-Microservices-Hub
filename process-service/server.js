const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/process-message', (req, res) => {
    const message = req.body.message;
    console.log(`Message received: ${message}`);
    res.send(`Message received: ${message}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

