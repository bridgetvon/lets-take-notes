const express = require('express');

const app = express();






















//create basic route for app to use 
app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});