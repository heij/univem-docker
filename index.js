const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/data', (req, res) => {
    return res.status(200).json({ data: new Date() });
});

app.listen(port, (err) => {
    console.log('Listening in port ' + port);
});

module.exports = app;