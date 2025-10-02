const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('D:/www'));

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1><p>This is dynamic content 🚀</p>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
