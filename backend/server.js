const express = require('express');
const app = express();
const request = require('request')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyD9NpL2p8Gn4sunZylBwxbNkDt7DbIiROs&query=Beaches', { json: true }, (err, result, body) => {
        res.send(body);
    });
});

app.listen(3000, () => console.log('listening'));