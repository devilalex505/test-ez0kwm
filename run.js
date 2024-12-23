const express = require('express');
const path = require('path');
const app = express();

/**
 * Instead of build provide your build directory.
 */
app.use(express.static(path.join(__dirname, 'www')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'wwww ', 'index.html'));
});

var server = app.listen(9000, () => {
    var port = server.address().port;
    console.log('App listening at http://localhost:' + port);
    require('child_process').exec(`start http://localhost:${server.address().port}`);
});
