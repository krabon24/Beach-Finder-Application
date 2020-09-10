const express = require('express');
const app = express();
const request = require('request')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/beaches', (req, res) => {
    console.log(req.query.key);
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${req.query.key}&query=beaches in ${req.query.city}`, { json: true }, (err, result, body) => {
        res.send(body);
    });
});

app.listen(process.env.PORT || 3000, () => console.log('server is running'));