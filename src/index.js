const express = require('express');
const path = require('path');

// Server
const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'static')))

// Settings
app.set('port', 3000 || 4000);

// Routes
app.get('/', (req, res) => {
    // HTML File which will be
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

// Listening
app.listen(app.get('port'), () => {
    console.log('Server running on port: ' + app.get('port'))
})